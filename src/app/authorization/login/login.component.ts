import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { LoginFormComponent } from './login-form/login-form.component';
import { ILoginFormModel } from './login-form/login-form.models';

@Component({
  selector: 'ann-login',
  standalone: true,
  imports: [LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  @Output() public login = new EventEmitter<ILoginFormModel>();

  public onLogin(formData: ILoginFormModel): void {
    this.login.emit(formData);
  }
}
