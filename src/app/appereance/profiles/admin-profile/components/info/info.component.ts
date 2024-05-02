import { AsyncPipe, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TuiButtonModule } from '@taiga-ui/core';
import { ScheduleService } from '../../../../../domain/services/schedule/schedule.service';
import { BaseInfoComponent } from '../../../components/base-info.component';
import { ProfileMainComponent } from '../../../components/profile-main/profile-main.component';
import { UserDataFormComponent } from '../../../components/user-data-form/user-data-form.component';
import { AppointmentsComponent } from '../../../user-profile/components/appointments/appointments.component';
import { EditScheduleComponent } from '../edit-schedule/edit-schedule.component';

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
    AsyncPipe,
  ],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoComponent extends BaseInfoComponent {
  protected scheduleService = inject(ScheduleService);
}
