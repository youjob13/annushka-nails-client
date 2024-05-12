import {
  JsonPipe,
  KeyValuePipe,
  NgStyle,
  NgTemplateOutlet,
} from '@angular/common';
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
  FormGroup,
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
import { CompareTimesPipe } from './compare-times.pipe';

type TimeGroup = Record<string, FormControl<TuiTime[] | null>>;

@Component({
  selector: 'ann-edit-schedule',
  standalone: true,
  imports: [
    TuiCalendarModule,
    ReactiveFormsModule,
    TuiTextfieldControllerModule,
    TuiInputTagModule,
    TuiHostedDropdownModule,
    TuiButtonModule,
    TuiDataListWrapperModule,
    TuiMultiSelectModule,
    JsonPipe,
    NgTemplateOutlet,
    TuiDataListModule,
    NgStyle,
    KeyValuePipe,
    CompareTimesPipe,
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

  protected selectedTimesPerDayControl = this.fb.array<FormGroup<TimeGroup>>(
    []
  );

  protected bookedDatesString: Map<string, TuiTime[]> = new Map();
  protected calendarDates: readonly TuiDay[] = [];
  protected timePeriods = tuiCreateTimePeriods();
  protected isEditable = false;

  public disabledAllItemsHandler = () => true;
  // todo: disable booked dates
  // get rid of bookedDatesString and simplify solution
  public disabledItemHandler = (tuiDay: TuiDay) => {
    const now = new Date();
    const tuiNow = new TuiDay(now.getFullYear(), now.getMonth(), now.getDate());
    return (
      tuiDay.dayBefore(tuiNow) ||
      isDayBooked(this.bookedDatesString, tuiDay.toString())
    );
  };
  // todo: highlight booked dates
  public markerHandler = (tuiDay: TuiDay): [string] | [] =>
    this.bookedDates?.has(tuiDay) ? ['var(--tui-success-fill)'] : [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['bookedDates'] && this.bookedDates) {
      for (const [date, times] of this.bookedDates) {
        this.selectedTimesPerDayControl.push(
          this.fb.group<TimeGroup>({
            [date.toString()]: this.fb.control(times),
          })
        );
      }

      this.bookedDatesString = new Map(
        Array.from(this.bookedDates.entries()).map(([key, value]) => [
          key.toString(),
          value,
        ])
      );
      this.calendarDates = Array.from(this.bookedDates.keys());
    }
  }

  public toggleTime(
    control: FormControl<TuiTime[] | null>,
    toAdd: boolean,
    time: TuiTime
  ): void {
    const times = control.value || [];

    if (!toAdd) {
      control.setValue(
        times.filter((item) => item.toString() !== time.toString())
      );
    } else {
      control.setValue([...times, time]);
    }
  }

  public onDayClick(day: TuiDay): void {
    const editableCalendarDate = this.calendarDates.find((item) =>
      item.daySame(day)
    );

    if (!editableCalendarDate) {
      this.selectedTimesPerDayControl.push(
        this.fb.group<TimeGroup>({
          [day.toString()]: this.fb.control(null),
        })
      );
      this.calendarDates = this.calendarDates.concat(day);
    } else {
      // todo: remove selected times for the day to exclude it from the list
      // this.selectedTimesPerDayControl.removeAt()
      this.calendarDates = this.calendarDates.filter(
        (item) => !item.daySame(day)
      );
    }
  }
}
