import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { MainRoute } from '../../domain/router.constants';
import { UserService } from '../../domain/services/user.service';

export const authorizationGuard: CanActivateFn = () => {
  const userService = inject(UserService);
  const router = inject(Router);

  return userService.isAuthorized$.pipe(
    map(
      (isAuthorized) => !isAuthorized || router.parseUrl(MainRoute.UserProfile)
    )
  );
};
