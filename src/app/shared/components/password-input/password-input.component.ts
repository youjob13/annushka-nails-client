import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  inject,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TuiIconModule } from '@taiga-ui/experimental';

@Component({
  selector: 'ann-password-input',
  standalone: true,
  imports: [TuiIconModule, NgClass],
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
  @Input({ alias: 'icon' }) hidePassIcon: string | undefined;

  private readonly cdr = inject(ChangeDetectorRef);

  protected _value = '';
  protected _isPasswordVisible = false;
  protected onChange: (value: string) => void = () => {};

  writeValue(value: string): void {
    this._value = value;
    this.cdr.markForCheck();
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

  public onInput(target: HTMLInputElement): void {
    this._value = target.value;
    this.onChange(this._value);
  }

  public toggleVisibility(): void {
    this._isPasswordVisible = !this._isPasswordVisible;
  }
}
