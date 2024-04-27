import { AsyncPipe, KeyValuePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  inject,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { TuiActiveZoneModule, TuiAutoFocusModule } from '@taiga-ui/cdk';
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiDropdownModule,
  TuiHostedDropdownComponent,
  TuiHostedDropdownModule,
  TuiSvgModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { TuiIconModule } from '@taiga-ui/experimental';
import { TuiCountryIsoCode } from '@taiga-ui/i18n';
import {
  TuiDataListWrapperModule,
  TuiInputInlineModule,
  TuiInputModule,
  TuiInputPhoneInternationalModule,
  TuiSortCountriesPipeModule,
  TuiToggleModule,
} from '@taiga-ui/kit';
import { ResponsiveDirective } from '../../../../common/services/responsive.directive';
import { NOTIFY_VIA } from '../../../../domain/constants';

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
    TuiDropdownModule,
    TuiActiveZoneModule,
    TuiDataListWrapperModule,
    FormsModule,
    TuiDataListModule,
    TuiSvgModule,
    KeyValuePipe,
    TuiToggleModule,
  ],
  templateUrl: './user-data-form.component.html',
  styleUrl: './user-data-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDataFormComponent extends ResponsiveDirective {
  protected readonly notifyVia = NOTIFY_VIA;

  private readonly fb = inject(FormBuilder);
  protected readonly formModel = this.fb.group({
    email: this.fb.control('danil.rodionow13@gmail.com', { nonNullable: true }),
    phone: this.fb.control('', { nonNullable: true }),
    password: this.fb.control('', { nonNullable: true }),
    notifyVia: this.fb.group({
      ...this.notifyVia.reduce<Record<string, FormControl<string | null>>>(
        (acc, item) => {
          if (item !== NOTIFY_VIA[0]) {
            acc[item.name] = this.fb.control(null);
          }
          return acc;
        },
        {}
      ),
    }),
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
  protected get notifyViaAppControl() {
    return this.formModel.controls.notifyVia.controls['App'];
  }
  protected get notifyViaTelegramControl() {
    return this.formModel.controls.notifyVia.controls['Telegram'];
  }

  protected readonly countries = Object.values(TuiCountryIsoCode);
  protected countryIsoCode = TuiCountryIsoCode.DE;
  protected isEditable = false;

  toggle(): void {
    if (this.isEditable) {
      console.log(this.formModel.value);
    }
    this.isEditable = !this.isEditable;
  }

  onFocusedChange(focused: boolean): void {
    if (!focused) {
      this.isEditable = false;
    }
  }

  @ViewChild(TuiHostedDropdownComponent)
  component?: TuiHostedDropdownComponent;

  readonly items = ['Edit', 'Download', 'Rename', 'Delete'];

  readonly selectItems = ['Item 1', 'Item 2'];

  open = false;

  selected = null;

  onClick(): void {
    this.open = false;
    this.component?.nativeFocusableElement?.focus();
  }
}
