import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthData } from '../auth.models';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

@Component({
  selector: 'ann-registration',
  standalone: true,
  imports: [RegistrationFormComponent],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent {
  public onRegistration(data: AuthData): void {
    console.log('Registration', data);
  }
}
