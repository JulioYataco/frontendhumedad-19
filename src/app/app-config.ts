import { provideHttpClient, withFetch, withInterceptors } from "@angular/common/http";
import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { authInterceptor } from "./core/interceptors/auth.interceptor";
import { provideClientHydration, withEventReplay } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { routes } from './app-routing.module';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { CookieService } from "ngx-cookie-service";

//Graficos con echarts
import { provideECharts } from 'ngx-echarts';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({eventCoalescing : true}),
        provideClientHydration(withEventReplay()),
        provideRouter(routes), 
        provideHttpClient(withFetch()),
        provideHttpClient(withInterceptors([authInterceptor])),
        CookieService,
        provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Aura
            }
        }),
        provideECharts()
    ]
}