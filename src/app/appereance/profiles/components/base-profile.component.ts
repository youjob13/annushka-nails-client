import { Directive, inject } from '@angular/core';
import { AuthService } from '../../../authorization/services/auth.service';
import { ResponsiveDirective } from '../../../common';

@Directive({})
export abstract class BaseProfileComponent extends ResponsiveDirective {
  private readonly authService = inject(AuthService);

  public logout() {
    this.authService.logout();
  }
}
