import { AsyncPipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  FormBuilder,
  FormsModule,
} from '@angular/forms';
import { TuiDay } from '@taiga-ui/cdk';
import {
  TuiCalendarModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
  TuiInputModule,
  TuiInputPhoneInternationalModule,
  TuiRadioLabeledModule,
  TuiSortCountriesPipeModule,
  TuiTextareaModule,
} from '@taiga-ui/kit';
import { TuiCountryIsoCode } from '@taiga-ui/i18n';

const DATE_TIME_MAP = new Map([
  [3, ['11:00', '12:00', '13:00']],
  [5, ['09:00', '11:30', '12:00', '13:00']],
]);

type DateFormGroup = FormGroup<{
  day: FormControl<TuiDay | null>;
  time: FormControl<string | null>;
}>;

type ContactsFormGroup = FormGroup<{
  name: FormControl<string | null>;
  phone: FormControl<number | null>;
  comment: FormControl<string | null>;
}>;

interface FormModel {
  service: FormControl<string>;
  date: DateFormGroup;
  contacts: ContactsFormGroup;
}

interface IService {
  id: string;
  name: string;
  price: number;
  description: string;
}

const SERVICES: IService[] = [
  {
    id: '1',
    name: 'Service 1',
    price: 25,
    description: 'Service 1 description',
  },
  {
    id: '2',
    name: 'Service 2',
    price: 25,
    description: 'Service 2 description',
  },
  {
    id: '3',
    name: 'Service 3',
    price: 25,
    description: 'Service 3 description',
  },
];

@Component({
  selector: 'ann-service-application-form',
  standalone: true,
  imports: [
    NgClass,
    TuiCalendarModule,
    TuiRadioLabeledModule,
    ReactiveFormsModule,
    TuiTextfieldControllerModule,
    FormsModule,
    AsyncPipe,
    TuiInputModule,
    TuiTextareaModule,
    TuiInputPhoneInternationalModule,
    TuiSortCountriesPipeModule,
  ],
  templateUrl: './service-application-form.component.html',
  styleUrl: './service-application-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceApplicationFormComponent {
  private readonly fb = inject(FormBuilder);

  protected services: IService[] = SERVICES;
  protected availableTimesForSelectedDay: string[] = [];

  protected selectedDay: TuiDay | null = null;

  protected readonly countries = Object.values(TuiCountryIsoCode);
  protected countryIsoCode = TuiCountryIsoCode.DE;

  protected readonly formModel: FormGroup<FormModel>;
  protected get serviceControl(): FormModel['service'] {
    return this.formModel.controls.service;
  }
  protected get dateGroup(): DateFormGroup {
    return this.formModel.controls.date;
  }
  protected get timeControl(): DateFormGroup['controls']['time'] {
    return this.dateGroup.controls.time;
  }
  protected get dayControl(): DateFormGroup['controls']['day'] {
    return this.dateGroup.controls.day;
  }
  protected get contactsGroup(): ContactsFormGroup {
    return this.formModel.controls.contacts;
  }
  protected get userNameControl(): ContactsFormGroup['controls']['name'] {
    return this.contactsGroup.controls.name;
  }
  protected get phoneControl(): ContactsFormGroup['controls']['phone'] {
    return this.contactsGroup.controls.phone;
  }
  protected get commentControl(): ContactsFormGroup['controls']['comment'] {
    return this.contactsGroup.controls.comment;
  }
  public disabledItemHandler = ({ day }: TuiDay) => {
    return !this.isDayAvailableForApplying(day);
  };

  constructor() {
    this.formModel = this.fb.group<FormModel>({
      service: this.fb.control('', { nonNullable: true }),
      date: this.fb.group(
        {
          day: this.fb.control(null),
          time: this.fb.control(null),
        },
        { nonNullable: true }
      ),
      contacts: this.fb.group(
        {
          name: this.fb.control(null),
          phone: this.fb.control(null),
          comment: this.fb.control(null),
        },
        { nonNullable: true }
      ),
    });
  }

  public submit(): void {
    console.log(this.formModel.value);
  }

  public onDayClick(day: TuiDay): void {
    this.selectedDay = day;
    this.dayControl.setValue(day);

    this.availableTimesForSelectedDay = this.getTimesForSelectedDay(day.day);
    if (this.clarifyTimeForDate(this.timeControl)) {
      this.timeControl.setValue(null);
    }
  }

  private clarifyTimeForDate(timeControl: DateFormGroup['controls']['time']) {
    return (
      timeControl.value &&
      !this.availableTimesForSelectedDay.includes(timeControl.value)
    );
  }

  private getTimesForSelectedDay(day: TuiDay['day']): string[] {
    return DATE_TIME_MAP.get(day) ?? [];
  }

  private isDayAvailableForApplying(day: TuiDay['day']): boolean {
    return DATE_TIME_MAP.has(day);
  }
}
