import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TuiAutoFocusModule } from '@taiga-ui/cdk';
import {
  TuiButtonModule,
  TuiHostedDropdownModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { TuiIconModule } from '@taiga-ui/experimental';
import { TuiCountryIsoCode } from '@taiga-ui/i18n';
import {
  TuiInputInlineModule,
  TuiInputModule,
  TuiInputPhoneInternationalModule,
  TuiSortCountriesPipeModule,
} from '@taiga-ui/kit';
import { ResponsiveDirective } from '../../../../common/services/responsive.directive';

@Component({
  selector: 'ann-user-data-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TuiInputModule,
    TuiInputInlineModule,
    TuiIconModule,
    TuiButtonModule,
    TuiAutoFocusModule,
    TuiInputPhoneInternationalModule,
    TuiSortCountriesPipeModule,
    AsyncPipe,
    TuiHostedDropdownModule,
    TuiTextfieldControllerModule,
  ],
  templateUrl: './user-data-form.component.html',
  styleUrl: './user-data-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDataFormComponent extends ResponsiveDirective {
  private readonly fb = inject(FormBuilder);
  protected readonly formModel = this.fb.group({
    email: this.fb.control('danil.rodionow13@gmail.com', { nonNullable: true }),
    phone: this.fb.control('', { nonNullable: true }),
    password: this.fb.control('', { nonNullable: true }),
  });
  protected get emailControl() {
    return this.formModel.controls.email;
  }
  protected get phoneControl() {
    return this.formModel.controls.phone;
  }
  protected get passwordControl() {
    return this.formModel.controls.password;
  }

  protected readonly countries = Object.values(TuiCountryIsoCode);
  protected countryIsoCode = TuiCountryIsoCode.DE;
  protected isEditable = false;

  toggle(): void {
    this.isEditable = !this.isEditable;
  }

  onFocusedChange(focused: boolean): void {
    if (!focused) {
      this.isEditable = false;
    }
  }
}
