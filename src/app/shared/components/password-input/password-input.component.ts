import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'ann-password-input',
  standalone: true,
  imports: [MatIconModule, NgClass],
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: PasswordInputComponent,
      multi: true,
    },
  ],
})
export class PasswordInputComponent implements ControlValueAccessor {
  @Input() placeholder = 'Password';
  @Input({ alias: 'icon' }) hidePassIcon = 'remove_red_eye';

  protected _value = '';
  protected _isPasswordVisible = false;
  protected onChange: (value: string) => void = () => {};

  writeValue(value: string): void {
    this._value = value;
  }
  registerOnChange(fn: typeof this.onChange): void {
    this.onChange = fn;
  }
  registerOnTouched(): void {
    // throw new Error('Method not implemented.');
  }
  // setDisabledState?(isDisabled: boolean): void {
  //   throw new Error('Method not implemented.');
  // }

  public toggleVisibility(): void {
    this._isPasswordVisible = !this._isPasswordVisible;
  }
}
