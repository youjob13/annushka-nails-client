import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { TuiDay } from '@taiga-ui/cdk';
import { TuiCalendarModule } from '@taiga-ui/core';
import { TuiRadioLabeledModule } from '@taiga-ui/kit';

const DATE_TIME_MAP = new Map([
  [3, ['11:00', '12:00', '13:00']],
  [5, ['09:00', '11:30', '12:00', '13:00']],
]);

@Component({
  selector: 'ann-service-application-form',
  standalone: true,
  imports: [
    NgClass,
    TuiCalendarModule,
    TuiRadioLabeledModule,
    ReactiveFormsModule,
  ],
  templateUrl: './service-application-form.component.html',
  styleUrl: './service-application-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceApplicationFormComponent {
  protected value: TuiDay | null = null;

  items: string[] = [];

  testForm = new FormGroup({
    testValue1: new FormControl(this.items[0]),
  });

  public onDayClick(day: TuiDay): void {
    console.log(day);
    this.items = DATE_TIME_MAP.get(day.day) ?? [];
    this.value = day;
  }

  public disabledItemHandler = (day: TuiDay) => {
    return !this.isFreeTimeExists(day.day);
  };

  private isFreeTimeExists(day: TuiDay['day']): boolean {
    return DATE_TIME_MAP.has(day);
  }
}
