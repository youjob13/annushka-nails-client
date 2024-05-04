import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { AuthType } from '../../auth.models';

@Component({
  selector: 'ann-login-variants',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './login-variants.component.html',
  styleUrl: './login-variants.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginVariantsComponent {
  loginOn = output<AuthType>();

  protected readonly AuthType = AuthType;
}
