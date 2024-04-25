import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  TuiAvatarLabeledModule,
  TuiAvatarModule,
  TuiFallbackSrcModule,
  TuiSurfaceModule,
  TuiTitleModule,
} from '@taiga-ui/experimental';

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
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent {}
