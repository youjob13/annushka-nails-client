import { Routes } from '@angular/router';
import { adminGuard } from './admin/admin.guard';
import { userProfileGuard } from './appereance/profiles/user-profile/user-profile.guard';
import { authorizationGuard } from './authorization/services/authorization.guard';
import { MainRoute } from './domain/router.constants';

const routes: Routes = [
  {
    path: MainRoute.Home,
    data: { animation: 'Home' },
    loadComponent: () =>
      import('./appereance/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: MainRoute.About,
    data: { animation: 'About' },
    loadComponent: () =>
      import('./appereance/about/about.component').then(
        (m) => m.AboutComponent
      ),
  },
  {
    path: MainRoute.Gallery,
    data: { animation: 'Gallery' },
    loadComponent: () =>
      import('./appereance/gallery/gallery.component').then(
        (m) => m.GalleryComponent
      ),
  },
  {
    path: MainRoute.Feedbacks,
    data: { animation: 'Feedbacks' },
    loadComponent: () =>
      import('./appereance/feedbacks/feedbacks.component').then(
        (m) => m.FeedbacksComponent
      ),
  },
  {
    path: MainRoute.Auth,
    data: { animation: 'Auth' },
    canActivate: [authorizationGuard],
    loadChildren: () =>
      import('./authorization/auth-routing.module').then(
        (m) => m.AuthRoutingModule
      ),
  },
  {
    path: MainRoute.UserProfile,
    data: { animation: 'UserProfile' },
    canActivate: [userProfileGuard],
    loadComponent: () =>
      import('./appereance/profiles/user-profile/user-profile.component').then(
        (m) => m.UserProfileComponent
      ),
  },

  {
    path: MainRoute.AdminProfile,
    data: { animation: 'AdminProfile' },
    canActivate: [userProfileGuard],
    loadComponent: () =>
      import(
        './appereance/profiles/admin-profile/admin-profile.component'
      ).then((m) => m.AdminProfileComponent),
  },
  {
    path: MainRoute.Admin,
    data: { animation: 'Admin' },
    canActivate: [adminGuard],
    loadComponent: () =>
      import('./admin/admin.component').then((m) => m.AdminComponent),
  },
];

export const installedMobileRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: MainRoute.UserProfile },
  ...routes,
];

export const browserRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: MainRoute.Home },
  ...routes,
];
