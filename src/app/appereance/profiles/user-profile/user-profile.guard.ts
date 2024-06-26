import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { Role } from '../../../domain/role.constants';
import { AuthRoute, MainRoute } from '../../../domain/router.constants';
import { UserService } from '../../../domain/services/user.service';

export const userProfileGuard: CanActivateFn = () => {
  const userService = inject(UserService);
  const router = inject(Router);

  return userService.userRole$.pipe(
    map((role) => {
      switch (role) {
        case Role.Guest:
          return router.parseUrl(`${MainRoute.Auth}/${AuthRoute.Login}`);
        case Role.Admin:
          return router.parseUrl(MainRoute.AdminProfile);
        case Role.User:
          return true;
        default:
          return router.parseUrl(`${MainRoute.Auth}/${AuthRoute.Login}`);
      }
    })
  );
};
