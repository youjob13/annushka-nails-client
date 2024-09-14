import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RequestsComponent } from '../components/requests/requests.component';
import { InfoComponent } from './components/info/info.component';
import { UserProfileComponent } from './user-profile.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: UserProfileComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: InfoComponent,
          },
          {
            path: 'requests',
            component: RequestsComponent,
          },
          // {
          //   path: 'service-list',
          //   component: ServiceListComponent,
          // },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class UserProfileModuleRouting {}
