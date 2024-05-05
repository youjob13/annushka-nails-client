import {
  TuiBadgeNotificationModule,
  TuiButtonModule,
  TuiIconModule,
  TuiIconsModule,
  TuiNavigationModule,
} from '@taiga-ui/experimental';
import { TuiAvatarModule, TuiBadgeModule, TuiTabsModule } from '@taiga-ui/kit';

import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TuiDataListModule, TuiHostedDropdownModule } from '@taiga-ui/core';

const TAIGA_UI_MODULES = [
  TuiNavigationModule,
  TuiIconModule,
  TuiBadgeModule,
  TuiBadgeNotificationModule,
  TuiAvatarModule,
  TuiTabsModule,
  TuiButtonModule,
  TuiIconsModule,
  TuiHostedDropdownModule,
  TuiDataListModule,
  NgOptimizedImage,
];

const BUILTIN_MODULES = [RouterModule, AsyncPipe];

export const IMPORTS = [...TAIGA_UI_MODULES, ...BUILTIN_MODULES];
