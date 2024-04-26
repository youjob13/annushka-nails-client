import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  TuiButtonModule,
  TuiLoaderModule,
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
import { BehaviorSubject, finalize } from 'rxjs';
import { ResponsiveDirective } from '../../../common/services/responsive.directive';
import { PASSWORD_REGEXP } from '../../auth.constants';
import { AuthService } from '../../services/auth.service';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
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
    TuiLoaderModule,
    AsyncPipe,
    TuiProgressModule,
    ProgressBarComponent,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: '../../common.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent extends ResponsiveDirective {
  private readonly authService = inject(AuthService);

  protected formCompleteProgress = 0;

  private readonly fb = inject(FormBuilder);
  protected readonly formModel: FormGroup<LoginFormModel>;

  protected readonly PasswordRegexp = PASSWORD_REGEXP;
  protected readonly isLoading$$ = new BehaviorSubject<boolean>(false);

  protected get usernameControl() {
    return this.formModel.controls.username;
  }
  protected get passwordControl() {
    return this.formModel.controls.password;
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
    });

    this.formModel.statusChanges.pipe(takeUntilDestroyed()).subscribe(() => {
      this.formCompleteProgress =
        [this.usernameControl.valid, this.passwordControl.valid].filter(Boolean)
          .length / Object.keys(this.formModel.controls).length;
    });
  }

  public onSubmit(): void {
    this.isLoading$$.next(true);

    this.authService
      .login(this.formModel.getRawValue())
      .pipe(finalize(() => this.isLoading$$.next(false)))
      .subscribe();
    this.resetForm();
  }

  public onReset(): void {
    this.resetForm();
  }

  private resetForm(): void {
    this.formModel.reset();
  }
}
