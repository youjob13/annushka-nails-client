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
  TuiProgressModule,
} from '@taiga-ui/kit';
import { ResponsiveDirective } from '../../../common/services/responsive.directive';
import { PASSWORD_REGEXP } from '../../auth.constants';
import { RegistrationAuthData } from '../../auth.models';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
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
    TuiProgressModule,
    ProgressBarComponent,
  ],
  templateUrl: './registration-form.component.html',
  styleUrl: '../../common.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationFormComponent extends ResponsiveDirective {
  @Output() send = new EventEmitter<RegistrationAuthData>();

  private readonly fb = inject(FormBuilder);
  protected readonly formModel: FormGroup<RegistrationFormModel>;
  protected readonly hidePassword = this.fb.control(true, {
    nonNullable: true,
  });

  protected formCompleteProgress = 0;

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
    super();

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

    this.formModel.statusChanges.pipe(takeUntilDestroyed()).subscribe(() => {
      this.formCompleteProgress =
        [
          this.usernameControl.valid,
          this.passwordControl.valid,
          this.repeatedPasswordControl.valid,
        ].filter(Boolean).length / Object.keys(this.formModel.controls).length;
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
