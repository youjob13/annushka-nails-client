import type { FormControl } from '@angular/forms';

export interface RegistrationFormModel {
  username: FormControl<string>;
  password: FormControl<string>;
  repeatedPassword: FormControl<string>;
}
