import { Directive, inject } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { TuiDialogFormService } from '@taiga-ui/kit';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { ResponsiveDirective } from '../../../common';
import { UserService } from '../../../domain/services/user.service';
import * as DTO from '../../../dto';

@Directive()
export class BaseInfoComponent extends ResponsiveDirective {
  protected readonly userData = inject(UserService).userData;
  private readonly dialogForm = inject(TuiDialogFormService);
  private readonly dialogs = inject(TuiDialogService);

  public appointmentToDecline: DTO.IAppointment | undefined;
  public readonly appointments: DTO.IAppointment[] = [
    {
      id: '1',
      timestamp: 1633830000000,
      master: {
        name: 'Anna Chirkova',
        avatar: 'https://avatars.githubusercontent.com/u/10106368',
      },
      service: {
        name: 'Super puper manicure',
        price: 100,
      },
    },
    {
      id: '2',
      timestamp: 1673830000000,
      master: {
        name: 'Anna Chirkova',
        avatar: 'https://avatars.githubusercontent.com/u/10106368',
      },
      service: {
        name: 'Ultra manicure',
        price: 200,
      },
    },
  ];

  public onDeclineAppointment(
    appointmentId: DTO.IAppointment['id'],
    declineAppointmentRef: PolymorpheusContent
  ) {
    const appointment = this.getAppointment(appointmentId);
    this.appointmentToDecline = appointment;

    this.dialogs.open(declineAppointmentRef, { closeable: true }).subscribe({
      complete: () => {
        console.log('Completed');
        this.dialogForm.markAsPristine();
      },
    });
  }

  private getAppointment(appointmentId: DTO.IAppointment['id']) {
    return this.appointments.find(({ id }) => id === appointmentId);
  }
}
