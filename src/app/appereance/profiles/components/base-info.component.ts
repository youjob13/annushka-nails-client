import { Directive, inject } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { TuiDialogFormService } from '@taiga-ui/kit';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { switchMap, tap } from 'rxjs';
import { ResponsiveDirective } from '../../../common';
import { AppointmentService } from '../../../domain/services/appointment/appointment.service';
import { UserService } from '../../../domain/services/user.service';
import * as DTO from '../../../dto';

@Directive()
export class BaseInfoComponent extends ResponsiveDirective {
  protected readonly userData = inject(UserService).userData;
  private readonly dialogForm = inject(TuiDialogFormService);
  private readonly dialogs = inject(TuiDialogService);
  protected readonly appointmentService = inject(AppointmentService);

  public appointmentToDecline: DTO.IAppointment | undefined;

  public onDeclineAppointment(
    appointmentId: DTO.IAppointment['id'],
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

  public declineAppointment(appointmentId: DTO.IAppointment['id']) {
    if (this.appointmentToDecline) {
      this.appointmentService
        .declineAppointment('1', appointmentId)
        .pipe(tap(() => (this.appointmentToDecline = undefined)))
        .subscribe();
    }
  }
}
