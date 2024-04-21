import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthRoute, MainRoute } from '../../domain/router.constants';
import { UserService } from '../../domain/services/user.service';

export const userProfileGuard: CanActivateFn = () => {
  const userService = inject(UserService);
  const router = inject(Router);

  return userService.isAuthorized$.pipe(
    map(
      (isAuthorized) =>
        isAuthorized || router.parseUrl(`${MainRoute.Auth}/${AuthRoute.Login}`)
    )
  );
};
