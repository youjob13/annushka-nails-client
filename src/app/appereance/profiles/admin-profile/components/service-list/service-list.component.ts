import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TuiLoaderModule } from '@taiga-ui/core';
import { switchMap } from 'rxjs';
import { ServiceItemComponent } from '../../../../../domain/components/service-item/service-item.component';
import { ServicesService } from '../../../../../domain/services/services/services.service';

@Component({
  selector: 'ann-service-list',
  standalone: true,
  imports: [
    ServiceItemComponent,
    TuiLoaderModule,
    AsyncPipe,
    ReactiveFormsModule,
  ],
  templateUrl: './service-list.component.html',
  styleUrl: './service-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceListComponent {
  // todo: make via canResolve
  servicesService = inject(ServicesService);

  protected servicesControl = new FormControl();

  constructor() {
    this.servicesControl.valueChanges
      .pipe(
        switchMap((newService) => this.servicesService.saveServices(newService))
      )
      .subscribe((value) => {
        console.log(value);
        // this.servicesControl.reset();
      });
  }
}
