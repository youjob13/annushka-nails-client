import type { FormControl, FormGroup } from '@angular/forms';
import type { TuiDay } from '@taiga-ui/cdk';

export type DateFormGroup = FormGroup<{
  day: FormControl<TuiDay | null>;
  time: FormControl<string | null>;
}>;

export type ContactsFormGroup = FormGroup<{
  name: FormControl<string | null>;
  phone: FormControl<number | null>;
  comment: FormControl<string | null>;
}>;

export interface FormModel {
  service: FormControl<string>;
  date: DateFormGroup;
  contacts: ContactsFormGroup;
  notifyVia: FormGroup<Record<string, FormControl<boolean>>>;
}

export interface IService {
  id: string;
  name: string;
  price: number;
  description: string;
}
