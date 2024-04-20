import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { AuthData } from '../auth.models';

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
