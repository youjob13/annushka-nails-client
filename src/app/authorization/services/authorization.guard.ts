import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Role } from '../../domain/role.constants';
import { UserService } from '../../domain/services/user.service';
import { AuthService } from './auth.service';

export const authorizationGuard: CanActivateFn = () => {
  const userService = inject(UserService);
  const router = inject(Router);

  const userData = userService.userData();

  if (!userData || userData.role === Role.Guest) {
    return true;
  }

  return router.parseUrl(
    AuthService.RolesMap[userData.role as keyof typeof AuthService.RolesMap]
  );
};
