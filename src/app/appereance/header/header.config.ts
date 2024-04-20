import {
  TuiBadgeNotificationModule,
  TuiButtonModule,
  TuiIconModule,
  TuiNavigationModule,
} from '@taiga-ui/experimental';
import { TuiAvatarModule, TuiBadgeModule, TuiTabsModule } from '@taiga-ui/kit';

import { AsyncPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

const TAIGA_UI_MODULES = [
  TuiNavigationModule,
  TuiIconModule,
  TuiBadgeModule,
  TuiBadgeNotificationModule,
  TuiAvatarModule,
  TuiTabsModule,
  TuiButtonModule,
];

const BUILTIN_MODULES = [RouterModule, AsyncPipe];

export const IMPORTS = [...TAIGA_UI_MODULES, ...BUILTIN_MODULES];
