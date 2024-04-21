import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthData } from '../auth.models';

@Component({
  selector: 'ann-login',
  standalone: true,
  imports: [LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  @Output() public login = new EventEmitter<AuthData>();

  public onLogin(formData: AuthData): void {
    this.login.emit(formData);
  }
}
