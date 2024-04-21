import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  inject,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import {
  TuiButtonModule,
  TuiSvgModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { AuthData } from '../../auth.models';
import { RegistrationFormModel } from './registration-form.models';
import {
  TuiCheckboxModule,
  TuiInputModule,
  TuiInputPasswordModule,
} from '@taiga-ui/kit';
import { TuiIconModule } from '@taiga-ui/experimental';

@Component({
  selector: 'ann-registration-form',
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
    FormsModule,
  ],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationFormComponent {
  @Output() send = new EventEmitter<AuthData>();

  protected readonly fb = inject(FormBuilder);
  protected readonly formModel: FormGroup<RegistrationFormModel>;

  constructor() {
    this.formModel = this.fb.group({
      username: this.fb.control('', {
        validators: [Validators.required, Validators.minLength(4)],
        nonNullable: true,
      }),
      password: this.fb.control('', {
        validators: Validators.required,
        nonNullable: true,
      }),
      repeatedPassword: this.fb.control('', {
        validators: Validators.required,
        nonNullable: true,
      }),
      hidePassword: this.fb.control(true, {
        nonNullable: true,
      }),
    });

    this.formModel.addValidators(passwordsMatchValidator);
    this.formModel.valueChanges.subscribe(() =>
      console.log(this.formModel.valid)
    );
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

const passwordsMatchValidator: ValidatorFn = (
  control: AbstractControl<RegistrationFormModel>
) => {
  const password = control.get('password')!;
  const repeatedPassword = control.get('repeatedPassword')!;

  if (password.value !== repeatedPassword.value) {
    return {
      notMatch: true,
    };
  }

  return null;
};
