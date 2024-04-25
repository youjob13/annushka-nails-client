import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { TuiDay } from '@taiga-ui/cdk';
import { TuiCountryIsoCode } from '@taiga-ui/i18n';
import { NOTIFY_VIA } from '../../constants';
import { IMPORTS } from './service-application-form.imports';
import {
  ContactsFormGroup,
  DateFormGroup,
  FormModel,
} from './service-application-form.models';

import { ResponsiveDirective } from '../../../common/services/responsive.directive';
import * as DTO from '../../../dto';
import { LOADER } from './service-application-form.constants';

// todo: should be generated automatically
const DATE_TIME_MAP = new Map([
  [3, ['11:00', '12:00', '13:00']],
  [
    5,
    [
      '09:00',
      '09:30',
      '10:00',
      '11:30',
      '12:00',
      '12:30',
      '13:00',
      '04:00',
      '14:30',
      '15:00',
      '15:30',
      '17:00',
    ],
  ],
]);

@Component({
  selector: 'ann-service-application-form',
  standalone: true,
  imports: IMPORTS,
  templateUrl: './service-application-form.component.html',
  styleUrl: './service-application-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceApplicationFormComponent
  extends ResponsiveDirective
  implements OnChanges
{
  @Input() requestInProgress: boolean = false;
  @Input() services: DTO.IService[] | null = [];

  @Output() send = new EventEmitter<FormGroup<FormModel>['value']>();

  private readonly fb = inject(FormBuilder);

  protected readonly loader = LOADER;
  protected readonly notifyVia = NOTIFY_VIA;
  protected serviceDetails: Record<DTO.IService['id'], DTO.IService> = {};
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
  public disabledAllItemsHandler = () => true;
  public disabledItemHandler = ({ day }: TuiDay) =>
    !this.isDayAvailableForApplying(day);

  constructor() {
    super();

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
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['services'] && this.services) {
      this.serviceDetails = this.services.reduce<
        Record<DTO.IService['id'], DTO.IService>
      >((acc, item) => {
        acc[item.id] = item;
        return acc;
      }, {});
    }
  }

  public submit(): void {
    this.send.emit(this.formModel.value);
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
