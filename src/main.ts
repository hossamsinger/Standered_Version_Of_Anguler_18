/// <reference types="@angular/localize" />

import { appConfig } from './app/app.config';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent ,{
  providers: [
    provideRouter(routes),
    provideAnimations(), // Enables animations globally
  
  ],
}).catch((err) => console.error(err));
