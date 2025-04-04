import { enableProdMode, importProvidersFrom } from '@angular/core';

import { environment } from './environments/environment';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
//import { AppRoutingModule, routes } from './app/app-routing.module';
//import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
// import { provideRouter } from '@angular/router';
// import { provideHttpClient, withInterceptors } from '@angular/common/http';
// import { authInterceptor } from './app/core/interceptors/auth.interceptor';
// import { MessageService } from 'primeng/api';
import { appConfig } from './app/app-config';
// import { providePrimeNG } from 'primeng/config';
// import Lara from '@primeng/themes/lara';
// import { appConfig } from './app/app-config';
//import { JwtHelperService } from '@auth0/angular-jwt';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, appConfig
  //{

  // providers: [
  //   importProvidersFrom(BrowserModule, AppRoutingModule), 
  //   provideAnimations(), 
  //   provideHttpClient(withInterceptors([authInterceptor])), 
  //   provideRouter(routes),
  //   MessageService,
  // ]
//}
).catch((err) => console.error(err));
