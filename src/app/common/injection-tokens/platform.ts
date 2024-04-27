import { InjectionToken, inject } from '@angular/core';
import { Platform } from '../constants';

export const WINDOW = new InjectionToken<Window>('Window', {
  providedIn: 'root',
  factory: () => window,
});

export const PLATFORM = new InjectionToken('platform', {
  providedIn: 'root',
  factory: () => {
    const window = inject(WINDOW);
    let platform: Platform;

    if (
      'serviceWorker' in window.navigator &&
      window.navigator.serviceWorker.controller
    ) {
      platform = Platform.PWA;
    } else {
      platform = Platform.Browser;
    }
    return platform;
  },
});
