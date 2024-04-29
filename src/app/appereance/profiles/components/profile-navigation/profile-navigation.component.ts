import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { TuiNavigationModule } from '@taiga-ui/experimental';
import { TuiTabsModule } from '@taiga-ui/kit';

@Component({
  selector: 'ann-profile-navigation',
  standalone: true,
  imports: [TuiNavigationModule, TuiTabsModule],
  templateUrl: './profile-navigation.component.html',
  styleUrl: './profile-navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileNavigationComponent {
  logout = output();
}
