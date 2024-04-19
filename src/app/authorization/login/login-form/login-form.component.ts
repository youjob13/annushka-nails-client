import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PasswordInputComponent } from '../../../shared/components/password-input/password-input.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

interface LoginFormModel {
  username: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'ann-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, PasswordInputComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  protected readonly fb = inject(FormBuilder);
  protected readonly formModel: FormGroup<LoginFormModel>;

  constructor() {
    this.formModel = this.fb.group({
      username: this.fb.control('', {
        validators: Validators.required,
        nonNullable: true,
      }),
      password: this.fb.control('', {
        validators: Validators.required,
        nonNullable: true,
      }),
    });
  }
}
