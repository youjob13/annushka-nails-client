import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ann-feedbacks',
  standalone: true,
  imports: [],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedbacksComponent {}
