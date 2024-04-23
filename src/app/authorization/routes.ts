import { Routes } from '@angular/router';
import { AuthorizationComponent } from './authorization.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';

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
