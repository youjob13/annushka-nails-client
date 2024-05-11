import { Directive, inject } from '@angular/core';
import { ResponsiveDirective } from '../../../common';
import { AppointmentService } from '../../../domain/services/appointment/appointment.service';
import { UserService } from '../../../domain/services/user.service';

@Directive()
export class BaseInfoComponent extends ResponsiveDirective {
  protected readonly userService = inject(UserService);
  protected readonly userData = this.userService.userData;
  protected readonly appointmentService = inject(AppointmentService);
}
