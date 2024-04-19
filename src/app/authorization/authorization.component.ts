import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthAction } from './auth.models';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { TuiButtonModule } from '@taiga-ui/core';
import { ILoginFormModel } from './login/login-form/login-form.models';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'ann-authorization',
  standalone: true,
  imports: [TuiButtonModule, LoginComponent, RegistrationComponent],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorizationComponent {
  private readonly authService = inject(AuthService);

  // todo: action from router
  action: AuthAction = AuthAction.Login;
  public readonly AuthAction = AuthAction;

  public onLogin(formData: ILoginFormModel): void {
    this.authService.login(formData).subscribe();
  }

  public toggleAction(): void {
    this.action =
      this.action === AuthAction.Login
        ? AuthAction.Registration
        : AuthAction.Login;
  }
}
