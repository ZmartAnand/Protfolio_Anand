import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';

import { routes } from './app.routes';
const firebaseConfig = {
  apiKey: 'AIzaSyA22cAu8HpGv1Rih_M4AMvIBu4J4xc0pf8',
  authDomain: 'anandsiva-portfolio.firebaseapp.com',
  projectId: 'anandsiva-portfolio',
  storageBucket: 'anandsiva-portfolio.firebasestorage.app',
  messagingSenderId: '545532568348',
  appId: '1:545532568348:web:d83094f15f7b100fc710d9',
  measurementId: 'G-R70YTDE7TV',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
  ],
};
