import { Pipe, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TuiTime } from '@taiga-ui/cdk';

@Pipe({
  name: 'annCompareTimes',
  standalone: true,
})
export class CompareTimesPipe implements PipeTransform {
  transform(
    value: TuiTime,
    formControl: FormControl<TuiTime[] | null>
  ): boolean {
    return !!formControl.value?.some(
      (time) => time.toString() === value.toString()
    );
  }
}
