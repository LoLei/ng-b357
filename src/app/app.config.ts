import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, TitleStrategy, withComponentInputBinding } from '@angular/router';

import { appRoutes } from './app.routes';
import { PageTitleStrategy } from './strategies/custom-title-strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      appRoutes,
      withComponentInputBinding(),
      // withDebugTracing(),
      // withEnabledBlockingInitialNavigation()
    ),
    { provide: TitleStrategy, useClass: PageTitleStrategy },
  ],
};
