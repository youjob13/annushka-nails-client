import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  inject,
} from '@angular/core';
import { PasswordInputComponent } from '../../../shared/components/password-input/password-input.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TuiButtonModule } from '@taiga-ui/core';
import { ILoginFormModel, LoginFormModel } from './login-form.models';

@Component({
  selector: 'ann-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, TuiButtonModule, PasswordInputComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  @Output() send = new EventEmitter<ILoginFormModel>();

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
