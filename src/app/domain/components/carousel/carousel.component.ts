import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiButtonModule, TuiLoaderModule } from '@taiga-ui/core';
import { TuiIconModule } from '@taiga-ui/experimental';
import {
  TuiCarouselModule,
  TuiIslandModule,
  TuiMarkerIconModule,
  TuiPaginationModule,
} from '@taiga-ui/kit';

@Component({
  selector: 'ann-carousel',
  standalone: true,
  imports: [
    TuiButtonModule,
    TuiCarouselModule,
    TuiIconModule,
    TuiPaginationModule,
    TuiIslandModule,
    TuiMarkerIconModule,
    TuiLoaderModule,
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent {
  index = 0;

  get background(): string {
    switch (this.index) {
      case 0:
        return 'url(https://cdn.tvc.ru/pictures/mood/bw/194/22.jpg)';
      case 1:
        return 'url(https://ic.pics.livejournal.com/ruhtal/6943012/12468/12468_900.jpg)';
      default:
        return 'url(https://cdn.motor1.com/images/mgl/28bxz/s1/ford-carousel.jpg)';
    }
  }

  navigate(delta: number): void {
    this.index = this.index + delta < 0 ? 2 : (this.index + delta) % 3;
  }
}
