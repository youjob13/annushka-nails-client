import { Directive, inject } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { TuiDialogFormService } from '@taiga-ui/kit';
import { AuthService } from '../../../authorization/services/auth.service';
import { ResponsiveDirective } from '../../../common';
import * as DTO from '../../../dto';

import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { UserService } from '../../../domain/services/user.service';
@Directive({})
export abstract class BaseProfileComponent extends ResponsiveDirective {
  protected readonly userData = inject(UserService).userData;
  private readonly authService = inject(AuthService);
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

  public logout() {
    this.authService.logout();
  }

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
