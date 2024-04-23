import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'annProgressBar',
  standalone: true,
})
export class ProgressBarPipe implements PipeTransform {
  private static startColor = [255, 0, 0]; // Red
  private static middleColor = [255, 255, 0]; // Yellow
  private static endColor = [30, 220, 0]; // Green

  transform(formCompleteProgress: number) {
    const progress = formCompleteProgress * 100;
    const color = [];

    if (progress <= 70) {
      // Interpolate between startColor and middleColor for the first half of the progress
      for (let i = 0; i < 3; i++) {
        color[i] =
          ProgressBarPipe.startColor[i] +
          (ProgressBarPipe.middleColor[i] - ProgressBarPipe.startColor[i]) *
            (progress / 50);
      }
    } else {
      // Interpolate between middleColor and endColor for the second half of the progress
      for (let i = 0; i < 3; i++) {
        color[i] =
          ProgressBarPipe.middleColor[i] +
          (ProgressBarPipe.endColor[i] - ProgressBarPipe.middleColor[i]) *
            ((progress - 50) / 50);
      }
    }

    return `rgb(${color.join(',')})`;
  }
}
