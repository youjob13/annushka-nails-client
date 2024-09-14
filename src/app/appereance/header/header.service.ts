import { Injectable, inject } from '@angular/core';
import { PLATFORM } from '../../common/injection-tokens/platform';
import { MainRoute } from '../../domain/router.constants';
import { UserService } from '../../domain/services/user.service';
import { MAIN_NAVIGATION_ITEMS } from './header.constants';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private readonly userService = inject(UserService);
  private readonly isMobile = inject(PLATFORM).isMobile;

  public readonly navigationItems = this.isMobile
    ? MAIN_NAVIGATION_ITEMS.slice(1)
    : [];

  constructor() {
    const isAdmin = this.userService.isAdmin();
    if (isAdmin) {
      this.navigationItems.push({
        title: 'Admin',
        link: MainRoute.AdminProfile,
      });
    }
  }
}
