import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () =>
      import('./authorization/login/login.component').then(
        (m) => m.LoginComponent
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
