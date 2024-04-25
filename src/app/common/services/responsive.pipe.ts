import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'responsive',
  standalone: true,
})
export class ResponsivePipe implements PipeTransform {
  transform<T>(value: T | undefined, fallback: T) {
    return value ?? fallback;
  }
}
