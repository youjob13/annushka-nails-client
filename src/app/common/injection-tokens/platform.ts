import { Platform as CdkPlatform } from '@angular/cdk/platform';
import { InjectionToken, inject } from '@angular/core';
import detectPlatform, { Platform } from '../detect-platform';

export const WINDOW = new InjectionToken<Window>('Window', {
  providedIn: 'root',
  factory: () => window,
});

export const PLATFORM = new InjectionToken<Platform>('platform', {
  providedIn: 'root',
  factory: () => {
    const window = inject(WINDOW);
    const platform = inject(CdkPlatform);
    return detectPlatform(window, platform);
  },
});
