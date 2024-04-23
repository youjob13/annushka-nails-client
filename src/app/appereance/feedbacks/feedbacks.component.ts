import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CarouselComponent } from '../../domain/components/carousel/carousel.component';

@Component({
  selector: 'ann-feedbacks',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedbacksComponent {}
