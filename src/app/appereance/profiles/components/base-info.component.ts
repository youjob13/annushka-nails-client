import { Directive, inject } from '@angular/core';
import { ResponsiveDirective } from '../../../common';
import { AppointmentService } from '../../../domain/services/appointment/appointment.service';
import { ServicesService } from '../../../domain/services/services/services.service';
import { UserService } from '../../../domain/services/user.service';

@Directive()
export class BaseInfoComponent extends ResponsiveDirective {
  protected readonly userService = inject(UserService);
  protected readonly servicesService = inject(ServicesService);
  protected readonly userData = this.userService.userData;
  protected readonly appointmentService = inject(AppointmentService);

  public applyForService<T>(data: T) {
    this.servicesService.applyForService(data);
  }
}
