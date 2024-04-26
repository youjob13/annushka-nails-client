import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TuiProgressModule } from '@taiga-ui/kit';
import { ProgressBarPipe } from '../../../domain/pipes/progress-bar.pipe';

@Component({
  selector: 'ann-progress-bar',
  standalone: true,
  imports: [TuiProgressModule, ProgressBarPipe, NgOptimizedImage],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarComponent {
  @Input({ required: true }) progress = 0;
}
