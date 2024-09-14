import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { Role } from '../../../domain/role.constants';
import { MainRoute } from '../../../domain/router.constants';
import { UserService } from '../../../domain/services/user.service';

export const adminProfileGuard: CanActivateFn = () => {
  const userService = inject(UserService);
  const router = inject(Router);

  return userService.userRole$.pipe(
    map((role) => {
      switch (role) {
        case Role.Admin:
          return true;
        case Role.User:
        default:
          return router.parseUrl(MainRoute.UserProfile);
      }
    })
  );
};
