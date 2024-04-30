import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { TuiDay, TuiTime } from '@taiga-ui/cdk';
import {
  TuiButtonModule,
  TuiCalendarModule,
  TuiHostedDropdownModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
  TuiDataListWrapperModule,
  TuiInputTagModule,
  TuiMultiSelectModule,
  tuiCreateTimePeriods,
  tuiInputTimeOptionsProvider,
} from '@taiga-ui/kit';
import { ResponsiveDirective } from '../../../../../common';
import { isDayAvailableForApplying } from '../../../../../domain/utils';

@Component({
  selector: 'ann-edit-schedule',
  standalone: true,
  imports: [
    TuiCalendarModule,
    ReactiveFormsModule,
    TuiTextfieldControllerModule,
    FormsModule,
    TuiInputTagModule,
    TuiHostedDropdownModule,
    TuiButtonModule,
    TuiDataListWrapperModule,
    TuiMultiSelectModule,
  ],
  templateUrl: './edit-schedule.component.html',
  styleUrl: './edit-schedule.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    tuiInputTimeOptionsProvider({
      icon: 'tuiIconCheckCircleLarge',
      mode: 'HH:MM:SS',
      itemSize: 's',
    }),
  ],
})
export class EditScheduleComponent extends ResponsiveDirective {
  private fb = inject(FormBuilder);
  protected timesPerDayControl = this.fb.group<
    Record<string, FormControl<TuiTime[] | null>>
  >({});

  public disabledAllItemsHandler = () => true;
  public disabledItemHandler = ({ day }: TuiDay) =>
    !isDayAvailableForApplying(new Map(), day);
  protected isTimeDropdownOpen: Record<string, boolean> = {};
  protected calendarDates: readonly TuiDay[] = [];
  protected timePeriods = tuiCreateTimePeriods();
  protected isEditable = false;

  // temporary solution !!!
  protected currentCalendarDate: TuiDay | null = null;
  //

  public onDayClick(day: TuiDay): void {
    const editableCalendarDate = this.calendarDates.find((item) =>
      item.daySame(day)
    );

    if (!editableCalendarDate) {
      this.timesPerDayControl.addControl(
        day.toString(),
        this.fb.control<TuiTime[] | null>(null)
      );
      this.calendarDates = this.calendarDates.concat(day);
    } else {
      this.calendarDates = this.calendarDates.filter(
        (item) => !item.daySame(day)
      );
    }
  }
}
