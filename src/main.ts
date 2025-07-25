import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appConfig } from './app/app.config';
import { App } from './app/app';

import { ObreroComponent } from '../src/app/components/obrero/obrero';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
