import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TuiNavigationModule } from '@taiga-ui/experimental';
import { TuiTabsModule } from '@taiga-ui/kit';
import { IRoute } from '../../../../common/models';

@Component({
  selector: 'ann-profile-navigation',
  standalone: true,
  imports: [TuiNavigationModule, TuiTabsModule, RouterLink, RouterLinkActive],
  templateUrl: './profile-navigation.component.html',
  styleUrl: './profile-navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileNavigationComponent {
  navItems = input.required<IRoute[]>();
  logout = output();
}
