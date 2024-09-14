import { AsyncPipe, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  TuiButtonModule,
  TuiDialogService,
  TuiPrimitiveTextfieldModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { TuiDialogFormService, TuiInputModule } from '@taiga-ui/kit';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { switchMap, tap } from 'rxjs';
import { ResponsiveDirective } from '../../../../common';
import { AppointmentService } from '../../../../domain/services/appointment/appointment.service';
import { IAppointment } from '../../../../dto';
import { AppointmentsComponent } from '../appointments/appointments.component';

@Component({
  selector: 'ann-requests',
  standalone: true,
  imports: [
    TuiInputModule,
    ReactiveFormsModule,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldControllerModule,
    AppointmentsComponent,
    AsyncPipe,
    TuiButtonModule,
    DatePipe,
  ],
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestsComponent extends ResponsiveDirective {
  protected readonly appointmentService = inject(AppointmentService);
  private readonly dialogForm = inject(TuiDialogFormService);
  private readonly dialogs = inject(TuiDialogService);

  protected searchControl = new FormControl('', { nonNullable: true });
  public appointmentToDecline: IAppointment | undefined;

  constructor() {
    super();
    this.searchControl.valueChanges.subscribe((value) => {
      this.appointmentService.search(value);
    });
  }

  public onDeclineAppointment(
    appointmentId: IAppointment['id'],
    declineAppointmentRef: PolymorpheusContent
  ) {
    this.appointmentService
      .getAppointment(appointmentId)
      ?.pipe(
        switchMap((appointment) => {
          this.appointmentToDecline = appointment;
          return this.dialogs.open(declineAppointmentRef, {
            closeable: true,
            label: 'Are you sure you want to cancel the appointment?',
            size: 's',
          });
        })
      )
      .subscribe({
        complete: () => {
          this.dialogForm.markAsPristine();
        },
      });
  }

  public declineAppointment(appointmentId: IAppointment['id']) {
    if (this.appointmentToDecline) {
      this.appointmentService
        .declineAppointment('1', appointmentId)
        .pipe(tap(() => (this.appointmentToDecline = undefined)))
        .subscribe();
    }
  }
}
