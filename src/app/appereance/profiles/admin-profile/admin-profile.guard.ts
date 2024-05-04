import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { Role } from '../../../domain/role.constants';
import { AuthRoute, MainRoute } from '../../../domain/router.constants';
import { UserService } from '../../../domain/services/user.service';

export const adminProfileGuard: CanActivateFn = () => {
  const userService = inject(UserService);
  const router = inject(Router);

  return userService.userRole$.pipe(
    map((role) => {
      console.log(role);
      switch (role) {
        case Role.Guest:
          return router.parseUrl(`${MainRoute.Auth}/${AuthRoute.Login}`);
        case Role.Admin:
          return true;
        case Role.User:
          return router.parseUrl(MainRoute.UserProfile);
        default:
          return router.parseUrl(`${MainRoute.Auth}/${AuthRoute.Login}`);
      }
    })
  );
};
