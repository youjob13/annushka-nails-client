import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import {
  TuiAvatarModule,
  TuiButtonModule,
  TuiSurfaceModule,
} from '@taiga-ui/experimental';
import { ResponsiveDirective } from '../../../../common';
import * as DTO from '../../../../dto';

@Component({
  selector: 'ann-profile-main',
  standalone: true,
  imports: [TuiAvatarModule, TuiSurfaceModule, TuiButtonModule],
  templateUrl: './profile-main.component.html',
  styleUrls: ['./profile-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileMainComponent extends ResponsiveDirective {
  userData = input.required<DTO.IUserInfo>();
}
