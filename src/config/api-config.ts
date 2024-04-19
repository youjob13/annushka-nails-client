import { InjectionToken } from '@angular/core';

export const AUTH_CONFIG = new InjectionToken('api-config', {
  providedIn: 'root',
  factory: () => {
    return {
      baseEndpoint: '/auth',
    };
  },
});
