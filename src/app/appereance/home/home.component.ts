import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ServiceApplicationFormComponent } from '../../domain/components/service-application-form/service-application-form.component';

@Component({
  selector: 'ann-home',
  standalone: true,
  imports: [ServiceApplicationFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
