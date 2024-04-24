import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule, TuiScrollbarModule } from '@taiga-ui/core';
import {
  TuiAvatarModule,
  TuiCarouselModule,
  TuiInputModule,
  TuiIslandModule,
  TuiMarkerIconModule,
  TuiTextareaModule,
} from '@taiga-ui/kit';
import { CarouselComponent } from '../../domain/components/carousel/carousel.component';

@Component({
  selector: 'ann-feedbacks',
  standalone: true,
  imports: [
    CarouselComponent,
    TuiCarouselModule,
    TuiIslandModule,
    TuiMarkerIconModule,
    TuiAvatarModule,
    TuiScrollbarModule,
    TuiInputModule,
    ReactiveFormsModule,
    TuiTextareaModule,
    TuiButtonModule,
  ],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedbacksComponent {
  private readonly fb = inject(FormBuilder);
  protected readonly formModel = this.fb.group({
    name: this.fb.control('', { nonNullable: true }),
    message: this.fb.control('', { nonNullable: true }),
  });

  protected get nameControl() {
    return this.formModel.controls.name;
  }
  protected get messageControl() {
    return this.formModel.controls.message;
  }

  public sendFeedback() {}
}
