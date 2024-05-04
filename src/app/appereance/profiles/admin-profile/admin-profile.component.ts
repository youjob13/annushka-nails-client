import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TuiDialogFormService } from '@taiga-ui/kit';
import { IRoute } from '../../../common/models';
import { BaseProfileComponent } from '../components/base-profile.component';
import { ProfileNavigationComponent } from '../components/profile-navigation/profile-navigation.component';

@Component({
  selector: 'ann-admin-profile',
  standalone: true,
  imports: [ProfileNavigationComponent, RouterOutlet],
  templateUrl: './admin-profile.component.html',
  styleUrl: './admin-profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TuiDialogFormService],
})
export class AdminProfileComponent extends BaseProfileComponent {
  protected readonly navItems: IRoute[] = [
    {
      link: '/admin-profile',
      title: 'Info',
    },
    {
      link: '/admin-profile/history',
      title: 'Requests',
    },
    {
      link: '/admin-profile/service-list',
      title: 'Service list',
    },
    {
      link: '/admin-profile/history',
      title: 'History',
    },
  ];
}
