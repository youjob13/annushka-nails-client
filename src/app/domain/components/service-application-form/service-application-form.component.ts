import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { TuiDay } from '@taiga-ui/cdk';
import { TuiAlertService } from '@taiga-ui/core';
import { TuiCountryIsoCode } from '@taiga-ui/i18n';
import { take } from 'rxjs';
import { IMPORTS } from './service-application-form.imports';
import {
  ContactsFormGroup,
  DateFormGroup,
  FormModel,
  IService,
} from './service-application-form.models';

const DATE_TIME_MAP = new Map([
  [3, ['11:00', '12:00', '13:00']],
  [5, ['09:00', '11:30', '12:00', '13:00']],
]);

const SERVICES: IService[] = [
  {
    id: '1',
    name: 'Base manicure',
    price: 25,
    description: 'Base manicure description',
  },
  {
    id: '2',
    name: 'Professional manicure',
    price: 25,
    description: 'Our masters will make your nails perfect!',
  },
  {
    id: '3',
    name: 'Super manicure',
    price: 25,
    description: 'The best option for the most demanding customers!',
  },
];

const NOTIFY = [
  {
    id: '4',
    name: 'Telegram',
  },
  {
    id: '5',
    name: 'WhatsApp',
  },
  {
    id: '2',
    name: 'Our App',
  },
  {
    id: '1',
    name: 'SMS',
  },
  {
    id: '2',
    name: 'Email',
  },
];

const LOADER = `<svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"/></svg>`;

@Component({
  selector: 'ann-service-application-form',
  standalone: true,
  imports: IMPORTS,
  templateUrl: './service-application-form.component.html',
  styleUrl: './service-application-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceApplicationFormComponent {
  private readonly fb = inject(FormBuilder);
  private tuiAlertService = inject(TuiAlertService);
  public isLoading = false;

  readonly loader = LOADER;
  protected services: IService[] = SERVICES;
  protected notifyVia = NOTIFY;
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
  protected get notifyViaControl(): FormModel['notifyVia'] {
    return this.formModel.controls.notifyVia;
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
  public disabledAllItemsHandler = () => {
    return true;
  };

  constructor() {
    this.formModel = this.fb.group<FormModel>({
      service: this.fb.control('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      date: this.fb.group(
        {
          day: this.fb.control({
            value: null,
            validators: Validators.required,
          }),
          time: this.fb.control({
            value: null,
            validators: Validators.required,
          }),
        },
        { nonNullable: true, validators: validateDateGroup }
      ),
      contacts: this.fb.group(
        {
          name: this.fb.control(null, { validators: Validators.required }),
          phone: this.fb.control(null),
          comment: this.fb.control(null),
        },
        { nonNullable: true }
      ),
      notifyVia: this.fb.group({
        ...this.notifyVia.reduce<Record<string, FormControl<boolean>>>(
          (acc, item) => {
            acc[item.name] = this.fb.control(false, { nonNullable: true });
            return acc;
          },
          {}
        ),
      }),
    });

    this.timeControl.valueChanges.pipe(takeUntilDestroyed()).subscribe(() => {
      this.timeControl.markAsTouched();
    });
  }

  public submit(): void {
    console.log(this.formModel.value, this.dateGroup.invalid);
    this.isLoading = true;
    setTimeout(() => {
      this.tuiAlertService
        .open('Request received!', { status: 'success' })
        .pipe(take(1))
        .subscribe();
      this.isLoading = false;
    }, 5000);
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

const validateDateGroup = (
  dateGroup: DateFormGroup
): ValidationErrors | null => {
  const isValid =
    dateGroup.controls.time.touched &&
    !!dateGroup.controls.day.value &&
    !!dateGroup.controls.time.value;

  return isValid ? null : { error: 'error text' };
};
