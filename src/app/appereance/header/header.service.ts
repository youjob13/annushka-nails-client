import { Injectable, inject } from '@angular/core';
import { AuthService } from '../../authentication/auth.service';
import { PLATFORM } from '../../common/injection-tokens/platform';
import { MainRoute } from '../../domain/router.constants';
import { MAIN_NAVIGATION_ITEMS } from './header.constants';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private readonly authenticationService = inject(AuthService);
  private readonly isMobile = inject(PLATFORM).isMobile;

  public readonly navigationItems = this.isMobile
    ? MAIN_NAVIGATION_ITEMS.slice(1)
    : [];

  constructor() {
    const isAdmin = this.authenticationService.isAdmin();
    if (isAdmin) {
      this.navigationItems.push({
        title: 'Admin',
        link: MainRoute.AdminProfile,
      });
    }
  }
}
