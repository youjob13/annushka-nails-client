import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ann-registration',
  standalone: true,
  imports: [],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent {}
