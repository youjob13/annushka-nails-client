import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ServiceItemComponent } from '../../../../../domain/components/service-item/service-item.component';
import { ServicesService } from '../../../../../domain/services/services/services.service';

@Component({
  selector: 'ann-service-list',
  standalone: true,
  imports: [ServiceItemComponent, AsyncPipe, ReactiveFormsModule],
  templateUrl: './service-list.component.html',
  styleUrl: './service-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceListComponent {
  // todo: make via canResolve
  services = inject(ServicesService);

  protected servicesControl = new FormControl();
}
