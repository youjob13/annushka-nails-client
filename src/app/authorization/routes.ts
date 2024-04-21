import { Routes } from '@angular/router';
import { AuthorizationComponent } from './authorization.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthorizationComponent,
    children: [
      {
        path: 'login',
        component: LoginFormComponent,
      },
      {
        path: 'registration',
        component: RegistrationFormComponent,
      },
    ],
  },
];
