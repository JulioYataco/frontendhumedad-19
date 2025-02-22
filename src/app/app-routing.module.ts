// angular import
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Project import
import { AdminComponent } from './theme/layouts/admin-layout/admin-layout.component';
import { GuestLayoutComponent } from './theme/layouts/guest-layout/guest-layout.component';
import { authGuard } from './core/guards/auth.guard';
//import { AuthGuard } from './core/guards/auth.guard';
export const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard/default',
        pathMatch: 'full'
      },
      {
        path: 'dashboard/default',
        loadComponent: () => import('./demo/dashboard/default/default.component').then((c) => c.DefaultComponent)
      },
      {
        path: 'lecturashumedad',
        loadComponent: () => import('./demo/components/dashboard/lecturas-humedad/lecturas-humedad.component').then((c) => c.LecturasHumedadComponent)
      },
      {
        path: 'typography',
        loadComponent: () => import('./demo/component/basic-component/color/color.component').then((c) => c.ColorComponent),
        canActivate: [authGuard]
      },
      {
        path: 'color',
        loadComponent: () => import('./demo/component/basic-component/typography/typography.component').then((c) => c.TypographyComponent)
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/others/sample-page/sample-page.component').then((c) => c.SamplePageComponent),
        canActivate: [authGuard]
      },
      {
        path: 'sedes',
        loadComponent: () => import('./demo/components/sedes/sedes.component').then((c) => c.SedesComponent),
        canActivate: [authGuard]
      },
      {
        path: 'roles',
        loadComponent: () => import('./demo/components/roles/roles.component').then((c) => c.RolesComponent),
        canActivate: [authGuard]
      },
      {
        path: 'fundos',
        loadComponent: () => import('./demo/components/fundos/fundos.component').then((c) => c.FundosComponent),
        canActivate: [authGuard]
      },
      {
        path: 'lotes',
        loadComponent: () => import('./demo/components/lotes/lotes.component').then((c) => c.LotesComponent),
        canActivate: [authGuard]
      },
      {
        path: 'cultivos',
        loadComponent: () => import('./demo/components/cultivos/cultivos.component').then((c) => c.CultivosComponent),
        canActivate: [authGuard]
      },
      {
        path: 'variedades',
        loadComponent: () => import('./demo/components/variedad-cultivos/variedad-cultivos.component').then((c) => c.VariedadCultivosComponent),
        canActivate: [authGuard]
      },
      {
        path: 'sublotes',
        loadComponent: () => import('./demo/components/sublotes/sublotes.component').then((c) => c.SublotesComponent),
        canActivate: [authGuard]
      },
      {
        path: 'tipos-suelos',
        loadComponent: () => import('./demo/components/tipos-suelos/tipos-suelos.component').then((c) => c.TiposSuelosComponent),
        canActivate: [authGuard]
      },
      {
        path: 'fenologias',
        loadComponent: () => import('./demo/components/fenologias/fenologias.component').then((c) => c.FenologiasComponent),
        canActivate: [authGuard]
      },
      {
        path: 'variedad-raices',
        loadComponent: () => import('./demo/components/variedad-raices/variedad-raices.component').then((c) => c.VariedadRaicesComponent),
        canActivate: [authGuard]
      },
      {
        path: 'detalle-raices',
        loadComponent: () => import('./demo/components/detalle-raices/detalle-raices.component').then((c) => c.DetalleRaicesComponent),
        canActivate: [authGuard]
      },
      {
        path: 'configuracion_procesadores',
        loadComponent: () => import('./demo/components/configuracion-procesadores/configuracion-procesadores.component').then((c) => c.ConfiguracionProcesadoresComponent),
        canActivate: [authGuard]
      },
      {
        path: 'procesadores',
        loadComponent: () => import('./demo/components/procesadores/procesadores.component').then((c) => c.ProcesadoresComponent),
        canActivate: [authGuard]
      },
      
    ]
  },
  {
    path: '',
    component: GuestLayoutComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./demo/pages/authentication/auth-login/auth-login.component').then((c) => c.AuthLoginComponent)
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./demo/pages/authentication/auth-register/auth-register.component').then((c) => c.AuthRegisterComponent)
      }
    ]
  },
  {
    path: 'logintest',
    loadComponent: ()=> import('./demo/components/auth/login/login.component')
    //canActivate: [AuthenticatedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
