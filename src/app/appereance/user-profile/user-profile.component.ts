import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {
  TuiDataListModule,
  TuiExpandModule,
  TuiHostedDropdownModule,
} from '@taiga-ui/core';
import {
  TuiAppearanceModule,
  TuiAvatarLabeledModule,
  TuiAvatarModule,
  TuiButtonModule,
  TuiFallbackSrcModule,
  TuiIconModule,
  TuiNavigationModule,
  TuiSurfaceModule,
  TuiTitleModule,
} from '@taiga-ui/experimental';
import { TuiTabsModule } from '@taiga-ui/kit';
import { ResponsiveDirective } from '../../common/services/responsive.directive';
import { FavoriteMastersComponent } from './components/favorite-masters/favorite-masters.component';
import { UserDataFormComponent } from './components/user-data-form/user-data-form.component';

@Component({
  selector: 'ann-user-profile',
  standalone: true,
  imports: [
    TuiAvatarModule,
    TuiFallbackSrcModule,
    AsyncPipe,
    TuiAvatarLabeledModule,
    TuiSurfaceModule,
    TuiTitleModule,
    TuiTabsModule,
    TuiNavigationModule,
    UserDataFormComponent,
    ReactiveFormsModule,
    TuiHostedDropdownModule,
    TuiAppearanceModule,
    TuiExpandModule,
    TuiDataListModule,
    TuiIconModule,
    TuiButtonModule,
    FavoriteMastersComponent,
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent extends ResponsiveDirective {
  private readonly fb = inject(FormBuilder);
  protected readonly formModel = this.fb.group({
    avatar: this.fb.control(
      'https://avatars.githubusercontent.com/u/10106368',
      { nonNullable: true }
    ),
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

  public loadAvatar(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    const reader = new FileReader();
    reader.onload = () => {
      this.avatarControl.patchValue(
        reader.result?.toString() || this.avatarControl.value
      );
    };
    reader.readAsDataURL(file);
  }
}
