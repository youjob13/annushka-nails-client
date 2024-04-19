import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () =>
      import('./authorization/authorization.component').then(
        (m) => m.AuthorizationComponent
      ),
  },
  {
    path: 'user-profile',
    loadComponent: () =>
      import('./userProfile/userProfile.component').then(
        (m) => m.UserProfileComponent
      ),
  },
];
