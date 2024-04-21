import { Routes } from '@angular/router';
import { AuthorizationComponent } from './authorization.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthorizationComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'registration',
        component: RegistrationComponent,
      },
    ],
  },
];
