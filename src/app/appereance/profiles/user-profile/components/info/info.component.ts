import { AsyncPipe, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule } from '@taiga-ui/core';
import { ServiceApplicationFormComponent } from '../../../../../domain/components/service-application-form/service-application-form.component';
import { EditScheduleComponent } from '../../../admin-profile/components/edit-schedule/edit-schedule.component';
import { AppointmentsComponent } from '../../../components/appointments/appointments.component';
import { BaseInfoComponent } from '../../../components/base-info.component';
import { ProfileMainComponent } from '../../../components/profile-main/profile-main.component';
import { UserDataFormComponent } from '../../../components/user-data-form/user-data-form.component';
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
    AsyncPipe,
    ServiceApplicationFormComponent,
  ],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoComponent extends BaseInfoComponent {
  private readonly fb = inject(FormBuilder);

  protected readonly userDataControl = this.fb.control('', {
    nonNullable: true,
  });

  protected expanded = false;
  protected submenu = false;
  protected open = false;
}
