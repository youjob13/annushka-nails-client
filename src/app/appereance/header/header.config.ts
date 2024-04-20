import {
  TuiBadgeNotificationModule,
  TuiButtonModule,
  TuiIconModule,
  TuiNavigationModule,
} from '@taiga-ui/experimental';
import { NavigationComponent } from './navigation/navigation.component';
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

const COMPONENTS = [NavigationComponent];

export const IMPORTS = [...TAIGA_UI_MODULES, ...BUILTIN_MODULES, ...COMPONENTS];
