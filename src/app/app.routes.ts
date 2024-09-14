import { Routes } from '@angular/router';
import { adminProfileGuard } from './appereance/profiles/admin-profile/admin-profile.guard';
import { userProfileGuard } from './appereance/profiles/user-profile/user-profile.guard';
import { MainRoute } from './domain/router.constants';

export const routes: Routes = [
  {
    path: MainRoute.Home,
    data: { animation: 'Home' },
    loadComponent: () =>
      import('./appereance/home/home.component').then((m) => m.HomeComponent),
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
    path: MainRoute.UserProfile,
    canActivate: [userProfileGuard],
    loadChildren: () =>
      import(
        './appereance/profiles/user-profile/user-profile.module.routing'
      ).then((m) => m.UserProfileModuleRouting),
  },
  {
    path: MainRoute.AdminProfile,
    canActivate: [adminProfileGuard],
    loadChildren: () =>
      import(
        './appereance/profiles/admin-profile/admin-profile.module.routing'
      ).then((m) => m.AdminProfileModuleRouting),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: MainRoute.UserProfile,
  },
];
