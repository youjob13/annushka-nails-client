import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TuiDialogFormService } from '@taiga-ui/kit';
import { IRoute } from '../../../common/models';
import { BaseProfileComponent } from '../components/base-profile.component';
import { ProfileNavigationComponent } from '../components/profile-navigation/profile-navigation.component';

@Component({
  selector: 'ann-user-profile',
  standalone: true,
  imports: [ProfileNavigationComponent, RouterOutlet],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
  providers: [TuiDialogFormService],
})
export class UserProfileComponent extends BaseProfileComponent {
  protected readonly navItems: IRoute[] = [
    {
      link: '/user-profile',
      title: 'Info',
    },
    {
      link: '/user-profile/requests',
      title: 'Requests',
    },
    {
      link: '/history',
      title: 'History',
    },
  ];
}
