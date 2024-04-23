import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ServiceApplicationFormComponent } from '../../domain/components/service-application-form/service-application-form.component';
import { ServicesService } from '../../domain/services/services/services.service';

@Component({
  selector: 'ann-home',
  standalone: true,
  imports: [ServiceApplicationFormComponent, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  protected readonly servicesService = inject(ServicesService);

  public applyForService<T>(data: T) {
    this.servicesService.applyForService(data);
  }
}
