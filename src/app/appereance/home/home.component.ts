import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TUI_IS_IOS } from '@taiga-ui/cdk';
import { TuiLinkModule } from '@taiga-ui/core';
import {
  TuiButtonModule,
  TuiSurfaceModule,
  TuiTitleModule,
} from '@taiga-ui/experimental';
import { ResponsiveDirective } from '../../common/services/responsive.directive';
import { ResponsivePipe } from '../../common/services/responsive.pipe';
import { MapComponent } from '../../domain/components/map/map.component';
@Component({
  selector: 'ann-home',
  standalone: true,
  imports: [
    TuiTitleModule,
    TuiButtonModule,
    TuiSurfaceModule,
    ResponsivePipe,
    NgOptimizedImage,
    RouterLink,
    TuiButtonModule,
    TuiLinkModule,
    MapComponent,
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
  public scrollTo(element: HTMLDivElement) {
    element.scrollIntoView({
      behavior: 'smooth',
      // block: 'end',
      // inline: 'nearest',
    });
  }
}
