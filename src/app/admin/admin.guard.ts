import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { MainRoute } from '../domain/router.constants';
import { PermissionsService } from '../domain/services/permissions.service';

export const adminGuard: CanActivateFn = () => {
  const permissionsService = inject(PermissionsService);
  const router = inject(Router);

  return permissionsService.hasAccessToAdminPage$.pipe(
    map((hasAccess) => hasAccess || router.parseUrl(MainRoute.Home))
  );
};
