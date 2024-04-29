import {
  APP_INITIALIZER,
  ApplicationConfig,
  Provider,
  importProvidersFrom,
  inject,
  isDevMode,
} from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Router, provideRouter } from '@angular/router';
import { TuiRootModule } from '@taiga-ui/core';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideServiceWorker } from '@angular/service-worker';
import { browserRoutes, installedMobileRoutes } from './app.routes';
import { PLATFORM } from './common';
import { httpAlertInterceptor } from './domain/interceptors/http-alert.interceptor';

const customProvideRouter = (): Provider => {
  return {
    provide: APP_INITIALIZER,
    useFactory: () => {
      const router = inject(Router);
      const platform = inject(PLATFORM);
      return () => {
        const routes = platform.installed
          ? installedMobileRoutes
          : browserRoutes;
        router.resetConfig(routes);
      };
    },
    multi: true,
    deps: [Router, PLATFORM],
  };
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([httpAlertInterceptor])),
    provideAnimations(),
    provideAnimationsAsync(),
    // bypass required `routes` param
    provideRouter([]),
    customProvideRouter(),
    importProvidersFrom(TuiRootModule),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerImmediately',
    }),
  ],
};
