import { Component, inject, signal } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { Analytics } from '@angular/fire/analytics';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // private router = inject(Router);
  // private analytics = inject(Analytics);

  // constructor() {
  //   this.router.events.subscribe((event) => {
  //     if ((event as any).urlAfterRedirects) {
  //       const pagePath = (event as any).urlAfterRedirects;
  //       logEvent(this.analytics, 'page_view', {
  //         page_path: pagePath,
  //       });
  //     }
  //   });
  // }
}
