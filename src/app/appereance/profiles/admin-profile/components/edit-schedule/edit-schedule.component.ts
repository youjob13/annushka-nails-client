import { JsonPipe, NgStyle, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  inject,
} from '@angular/core';
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
  TuiDataListModule,
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
import { AdoptedSchedule } from '../../../../../domain/services/schedule/schedule.models';
import { isDayBooked } from '../../../../../domain/utils';

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
    JsonPipe,
    NgTemplateOutlet,
    TuiDataListModule,
    NgStyle,
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
export class EditScheduleComponent
  extends ResponsiveDirective
  implements OnChanges
{
  @Input() adoptedSchedule: AdoptedSchedule | null = new Map();
  @Input() bookedDates: Map<TuiDay, TuiTime[]> | null = new Map();

  private fb = inject(FormBuilder);
  protected timesPerDayControl = this.fb.group<
    Record<string, FormControl<TuiTime[] | null>>
  >({});

  // todo: refactor
  protected bookedDatesString: Map<string, TuiTime[]> = new Map();
  protected isTimeDropdownOpen: Record<string, boolean> = {};
  protected calendarDates: readonly TuiDay[] = [];
  protected timePeriods = tuiCreateTimePeriods();
  protected isEditable = false;
  // temporary solution !!!
  protected currentCalendarDate: TuiDay | null = null;
  //

  public disabledAllItemsHandler = () => true;
  public disabledItemHandler = (tuiDay: TuiDay) => {
    const now = new Date();
    const tuiNow = new TuiDay(now.getFullYear(), now.getMonth(), now.getDate());
    return (
      tuiDay.dayBefore(tuiNow) ||
      isDayBooked(this.bookedDatesString, tuiDay.toString())
    );
  };
  public markerHandler = (tuiDay: TuiDay): [string] | [] =>
    this.bookedDates?.has(tuiDay) ? ['var(--tui-success-fill)'] : [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['bookedDates'] && this.bookedDates) {
      const times = Object.fromEntries(
        Array.from(this.bookedDates.entries()).map(([key, time]) => [
          key.toString(),
          this.fb.control<TuiTime[] | null>(time),
        ])
      );
      this.timesPerDayControl = this.fb.group(times);
      this.bookedDatesString = new Map(
        Array.from(this.bookedDates.entries()).map(([key, value]) => [
          key.toString(),
          value,
        ])
      );
      this.calendarDates = Array.from(this.bookedDates.keys());
    }
  }

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
