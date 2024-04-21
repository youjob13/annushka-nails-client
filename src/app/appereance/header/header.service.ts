import { Injectable, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BehaviorSubject } from 'rxjs';
import { MainRoute } from '../../domain/router.constants';
import { PermissionsService } from '../../domain/services/permissions.service';
import { UserService } from '../../domain/services/user.service';
import { MAIN_NAVIGATION_ITEMS } from './header.constants';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private readonly permissionsService = inject(PermissionsService);
  private readonly userService = inject(UserService);

  public readonly navigationItems = MAIN_NAVIGATION_ITEMS;
  public readonly isAuthorized$$ = new BehaviorSubject(false);

  constructor() {
    this.userService.isAuthorized$.subscribe({
      next: (isAuthorized) => this.isAuthorized$$.next(isAuthorized),
    });

    this.permissionsService.hasAccessToAdminPage$
      .pipe(takeUntilDestroyed())
      .subscribe({
        next: (isAdmin) => {
          if (isAdmin) {
            this.navigationItems.push({
              title: 'Admin',
              link: MainRoute.Admin,
            });
          }
        },
      });
  }
}
