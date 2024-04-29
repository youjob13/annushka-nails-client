import { AsyncPipe, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiAppearanceModule, TuiTitleModule } from '@taiga-ui/experimental';
import { TuiDialogFormService } from '@taiga-ui/kit';
import { BaseProfileComponent } from '../components/base-profile.component';
import { ProfileMainComponent } from '../components/profile-main/profile-main.component';
import { ProfileNavigationComponent } from '../components/profile-navigation/profile-navigation.component';
import { AppointmentsComponent } from '../user-profile/components/appointments/appointments.component';
import { FavoriteMastersComponent } from '../user-profile/components/favorite-masters/favorite-masters.component';
import { UserDataFormComponent } from '../user-profile/components/user-data-form/user-data-form.component';

@Component({
  selector: 'ann-admin-profile',
  standalone: true,
  imports: [
    AsyncPipe,
    TuiTitleModule,
    UserDataFormComponent,
    ReactiveFormsModule,
    TuiAppearanceModule,
    FavoriteMastersComponent,
    AppointmentsComponent,
    ProfileNavigationComponent,
    ProfileMainComponent,
    TuiButtonModule,
    DatePipe,
  ],
  templateUrl: './admin-profile.component.html',
  styleUrl: './admin-profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TuiDialogFormService],
})
export class AdminProfileComponent extends BaseProfileComponent {}
