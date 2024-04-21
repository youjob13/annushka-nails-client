import { Routes } from '@angular/router';
import { adminGuard } from './admin/admin.guard';
import { MainRoute } from './domain/router.constants';
import { userProfileGuard } from './appereance/user-profile/user-profile.guard';

export const routes: Routes = [
  {
    path: MainRoute.Home,
    loadComponent: () =>
      import('./appereance/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: MainRoute.About,
    loadComponent: () =>
      import('./appereance/about/about.component').then(
        (m) => m.AboutComponent
      ),
  },
  {
    path: MainRoute.Feedbacks,
    loadComponent: () =>
      import('./appereance/feedbacks/feedbacks.component').then(
        (m) => m.FeedbacksComponent
      ),
  },
  {
    path: MainRoute.SocialMedia,
    loadComponent: () =>
      import('./appereance/social-media/social-media.component').then(
        (m) => m.SocialMediaComponent
      ),
  },
  {
    path: MainRoute.Auth,
    loadChildren: () =>
      import('./authorization/auth-routing.module').then(
        (m) => m.AuthRoutingModule
      ),
  },
  {
    path: MainRoute.UserProfile,
    canActivate: [userProfileGuard],
    loadComponent: () =>
      import('./appereance/user-profile/user-profile.component').then(
        (m) => m.UserProfileComponent
      ),
  },
  {
    path: MainRoute.Admin,
    canActivate: [adminGuard],
    loadComponent: () =>
      import('./admin/admin.component').then((m) => m.AdminComponent),
  },
];