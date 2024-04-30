import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule } from '@taiga-ui/core';
import { EditScheduleComponent } from '../../../admin-profile/components/edit-schedule/edit-schedule.component';
import { BaseInfoComponent } from '../../../components/base-info.component';
import { ProfileMainComponent } from '../../../components/profile-main/profile-main.component';
import { UserDataFormComponent } from '../../../components/user-data-form/user-data-form.component';
import { AppointmentsComponent } from '../appointments/appointments.component';
import { FavoriteMastersComponent } from '../favorite-masters/favorite-masters.component';

@Component({
  selector: 'ann-info',
  standalone: true,
  imports: [
    ProfileMainComponent,
    UserDataFormComponent,
    EditScheduleComponent,
    AppointmentsComponent,
    TuiButtonModule,
    DatePipe,
    FavoriteMastersComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoComponent extends BaseInfoComponent {
  private readonly fb = inject(FormBuilder);

  protected readonly formModel = this.fb.group({
    avatar: this.fb.control('', { nonNullable: true }),
    userData: this.fb.control('', { nonNullable: true }),
  });
  protected get avatarControl() {
    return this.formModel.controls.avatar;
  }
  protected get userDataControl() {
    return this.formModel.controls.userData;
  }

  protected expanded = false;
  protected submenu = false;
  protected open = false;

  public loadAvatar(avatarValue: string | undefined) {
    this.avatarControl.patchValue(avatarValue || this.avatarControl.value);
  }
}
