import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  inject,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  TuiButtonModule,
  TuiSvgModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { TuiIconModule } from '@taiga-ui/experimental';
import {
  TuiCheckboxModule,
  TuiInputModule,
  TuiInputPasswordModule,
} from '@taiga-ui/kit';
import { PASSWORD_REGEXP } from '../auth.constants';
import { LoginAuthData } from '../auth.models';
import { LoginFormModel } from './login-form.models';

@Component({
  selector: 'ann-login-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TuiCheckboxModule,
    TuiTextfieldControllerModule,
    TuiInputModule,
    TuiSvgModule,
    TuiButtonModule,
    TuiIconModule,
    TuiInputPasswordModule,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  @Output() send = new EventEmitter<LoginAuthData>();

  private readonly fb = inject(FormBuilder);
  protected readonly formModel: FormGroup<LoginFormModel>;

  protected readonly PasswordRegexp = PASSWORD_REGEXP;

  protected get usernameControl() {
    return this.formModel.controls.username;
  }
  protected get passwordControl() {
    return this.formModel.controls.password;
  }

  constructor() {
    this.formModel = this.fb.group({
      username: this.fb.control('', {
        validators: [Validators.required, Validators.minLength(3)],
        nonNullable: true,
      }),
      password: this.fb.control('', {
        validators: Validators.required,
        nonNullable: true,
      }),
    });
  }

  public onSubmit(): void {
    this.send.emit(this.formModel.getRawValue());
    this.resetForm();
  }

  public onReset(): void {
    this.resetForm();
  }

  private resetForm(): void {
    this.formModel.reset();
  }
}
