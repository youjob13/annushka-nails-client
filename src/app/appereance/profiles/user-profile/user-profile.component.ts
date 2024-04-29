import { AsyncPipe, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiAppearanceModule, TuiTitleModule } from '@taiga-ui/experimental';
import { TuiDialogFormService } from '@taiga-ui/kit';
import { BaseProfileComponent } from '../components/base-profile.component';
import { ProfileMainComponent } from '../components/profile-main/profile-main.component';
import { ProfileNavigationComponent } from '../components/profile-navigation/profile-navigation.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { FavoriteMastersComponent } from './components/favorite-masters/favorite-masters.component';
import { UserDataFormComponent } from './components/user-data-form/user-data-form.component';

@Component({
  selector: 'ann-user-profile',
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
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
  providers: [TuiDialogFormService],
})
export class UserProfileComponent extends BaseProfileComponent {
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
