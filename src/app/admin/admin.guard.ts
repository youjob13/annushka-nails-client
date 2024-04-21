import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { PermissionsService } from '../domain/services/permissions.service';
import { MainRoute } from '../domain/router.constants';
import { map } from 'rxjs';

export const adminGuard: CanActivateFn = () => {
  const permissionsService = inject(PermissionsService);
  const router = inject(Router);

  return permissionsService.hasAccessToAdminPage$.pipe(
    map((hasAccess) => hasAccess || router.parseUrl(MainRoute.Home))
  );
};
