import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminProfileComponent } from './admin-profile.component';
import { InfoComponent } from './components/info/info.component';
import { RequestsComponent } from './components/requests/requests.component';
import { ServiceListComponent } from './components/service-list/service-list.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AdminProfileComponent,
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
          {
            path: 'service-list',
            component: ServiceListComponent,
          },
          {
            path: 'history',
            component: RequestsComponent,
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AdminProfileModuleRouting {}
