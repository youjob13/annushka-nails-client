import { AsyncPipe, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule, TuiDialogService } from '@taiga-ui/core';
import { TuiAppearanceModule, TuiTitleModule } from '@taiga-ui/experimental';
import { TuiDialogFormService } from '@taiga-ui/kit';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { AuthService } from '../../../authorization/services/auth.service';
import { ResponsiveDirective } from '../../../common/services/responsive.directive';
import { UserService } from '../../../domain/services/user.service';
import * as DTO from '../../../dto';
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
export class UserProfileComponent extends ResponsiveDirective {
  private readonly fb = inject(FormBuilder);
  private readonly dialogForm = inject(TuiDialogFormService);
  private readonly dialogs = inject(TuiDialogService);
  private readonly authService = inject(AuthService);
  protected readonly userData = inject(UserService).userData;

  protected readonly appointments: DTO.IAppointment[] = [
    {
      id: '1',
      timestamp: 1633830000000,
      master: {
        name: 'Anna Chirkova',
        avatar: 'https://avatars.githubusercontent.com/u/10106368',
      },
      service: {
        name: 'Super puper manicure',
        price: 100,
      },
    },
    {
      id: '2',
      timestamp: 1673830000000,
      master: {
        name: 'Anna Chirkova',
        avatar: 'https://avatars.githubusercontent.com/u/10106368',
      },
      service: {
        name: 'Ultra manicure',
        price: 200,
      },
    },
  ];

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

  protected appointmentToDecline: DTO.IAppointment | undefined;

  protected expanded = false;
  protected submenu = false;
  protected open = false;

  public loadAvatar(avatarValue: string | undefined) {
    this.avatarControl.patchValue(avatarValue || this.avatarControl.value);
  }

  public logout() {
    this.authService.logout();
  }

  public onDeclineAppointment(
    appointmentId: DTO.IAppointment['id'],
    declineAppointmentRef: PolymorpheusContent
  ) {
    const appointment = this.getAppointment(appointmentId);
    this.appointmentToDecline = appointment;

    this.dialogs.open(declineAppointmentRef, { closeable: true }).subscribe({
      complete: () => {
        console.log('Completed');
        this.dialogForm.markAsPristine();
      },
    });
  }

  private getAppointment(appointmentId: DTO.IAppointment['id']) {
    return this.appointments.find(({ id }) => id === appointmentId);
  }
}
