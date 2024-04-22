import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { TuiRootModule } from '@taiga-ui/core';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { httpAlertInterceptor } from './domain/http-alert.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([httpAlertInterceptor])),
    provideAnimations(),
    provideAnimationsAsync(),
    provideRouter(routes),
    importProvidersFrom(TuiRootModule),
  ],
};
