import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./authorization/auth-routing.module').then(
        (m) => m.AuthRoutingModule
      ),
  },
  {
    path: 'user-profile',
    loadComponent: () =>
      import('./userProfile/userProfile.component').then(
        (m) => m.UserProfileComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./appereance/about/about.component').then(
        (m) => m.AboutComponent
      ),
  },
];
