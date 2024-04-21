import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
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
import { RegistrationAuthData } from '../auth.models';
import { RegistrationFormModel } from './registration-form.models';

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
  @Output() send = new EventEmitter<RegistrationAuthData>();

  private readonly fb = inject(FormBuilder);
  protected readonly formModel: FormGroup<RegistrationFormModel>;
  protected readonly hidePassword = this.fb.control(true, {
    nonNullable: true,
  });

  protected readonly PasswordRegexp = PASSWORD_REGEXP;

  protected get usernameControl() {
    return this.formModel.controls.username;
  }
  protected get passwordControl() {
    return this.formModel.controls.password;
  }
  protected get repeatedPasswordControl() {
    return this.formModel.controls.repeatedPassword;
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
      repeatedPassword: this.fb.control('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
    });

    this.passwordControl.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        this.repeatedPasswordControl.updateValueAndValidity();
      });

    this.repeatedPasswordControl.addValidators(
      getPasswordMatcherValidator(this.passwordControl)
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

const getPasswordMatcherValidator = (
  originalPasswordControl: FormControl<string>
) => {
  return (repeatedPasswordControl: AbstractControl<string>) => {
    if (originalPasswordControl.value !== repeatedPasswordControl.value) {
      return {
        notMatch: true,
      };
    }

    return null;
  };
};
