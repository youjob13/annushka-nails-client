import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  TuiButtonModule,
  TuiSurfaceModule,
  TuiTitleModule,
} from '@taiga-ui/experimental';
import { ServiceApplicationFormComponent } from '../../domain/components/service-application-form/service-application-form.component';
import { ServicesService } from '../../domain/services/services/services.service';

@Component({
  selector: 'ann-home',
  standalone: true,
  imports: [
    ServiceApplicationFormComponent,
    AsyncPipe,
    TuiTitleModule,
    TuiButtonModule,
    TuiSurfaceModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  protected readonly servicesService = inject(ServicesService);

  public scrollTo(element: HTMLDivElement) {
    element.scrollIntoView({
      behavior: 'smooth',
      // block: 'end',
      // inline: 'nearest',
    });
  }

  public applyForService<T>(data: T) {
    this.servicesService.applyForService(data);
  }
}
