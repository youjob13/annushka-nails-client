import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TUI_IS_IOS } from '@taiga-ui/cdk';
import { TuiAlertService, TuiDialogService } from '@taiga-ui/core';
import {
  TuiButtonModule,
  TuiSurfaceModule,
  TuiTitleModule,
} from '@taiga-ui/experimental';
import { ResponsiveDirective } from '../../common/services/responsive.directive';
import { ResponsivePipe } from '../../common/services/responsive.pipe';
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
    ResponsivePipe,
    NgOptimizedImage,
    RouterLink,
    TuiButtonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: TUI_IS_IOS,
      useValue: false,
    },
  ],
})
export class HomeComponent extends ResponsiveDirective {
  private readonly dialogs = inject(TuiDialogService);
  private readonly alerts = inject(TuiAlertService);
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

  public show(): void {
    this.dialogs
      .open('Apply for service in one click!', {
        label: 'Download our app to get the best experience!',
        // header: 'Download our app to get the best experience!',
      })
      .subscribe();
  }
}
