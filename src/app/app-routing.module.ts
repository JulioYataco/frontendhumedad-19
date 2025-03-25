// angular import
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Project import
import { AdminComponent } from './theme/layouts/admin-layout/admin-layout.component';
//import { GuestLayoutComponent } from './theme/layouts/guest-layout/guest-layout.component';
import { authGuard } from './core/guards/auth.guard';
import { authenticatedGuard } from './core/guards/authenticated.guard';
import { rolGuard } from './core/guards/rol.guard';
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
        loadComponent: () => import('./demo/dashboard/default/default.component').then((c) => c.DefaultComponent),
        canActivate: [authGuard ], //rolGuard
        // data: { expectedRole: 'Jefe Fundo' } // Solo Administradores pueden acceder

      },
      {
        path: 'lecturashumedad',
        loadComponent: () => import('./demo/components/dashboard/lecturas-humedad/lecturas-humedad.component').then((c) => c.LecturasHumedadComponent),
        canActivate: [authGuard, rolGuard ], //rolGuard
        data: { rol: ['Jefe Fundo', 'Super Usuario' ]} // Solo Administradores pueden acceder

      },
      {
        path: 'sedes',
        loadComponent: () => import('./demo/components/sedes/sedes.component').then((c) => c.SedesComponent),
        canActivate: [authGuard, rolGuard],
        data: {rol: ['Administrador', 'Super Usuario']},
      },
      {
        path: 'roles',
        loadComponent: () => import('./demo/components/roles/roles.component').then((c) => c.RolesComponent),
        canActivate: [authGuard, rolGuard],
        data: {rol: ['Administrador', 'Super Usuario']},
      },
      {
        path: 'fundos',
        loadComponent: () => import('./demo/components/fundos/fundos.component').then((c) => c.FundosComponent),
        canActivate: [authGuard, rolGuard],
        data: {rol: ['Administrador', 'Super Usuario']},
      },
      {
        path: 'lotes',
        loadComponent: () => import('./demo/components/lotes/lotes.component').then((c) => c.LotesComponent),
        canActivate: [authGuard, rolGuard],
        data: {rol: ['Administrador', 'Super Usuario']},
      },
      {
        path: 'cultivos',
        loadComponent: () => import('./demo/components/cultivos/cultivos.component').then((c) => c.CultivosComponent),
        canActivate: [authGuard, rolGuard],
        data: {rol: ['Administrador', 'Super Usuario']},
      },
      {
        path: 'variedades',
        loadComponent: () => import('./demo/components/variedad-cultivos/variedad-cultivos.component').then((c) => c.VariedadCultivosComponent),
        canActivate: [authGuard, rolGuard],
        data: {rol: ['Administrador', 'Super Usuario']},
      },
      {
        path: 'sublotes',
        loadComponent: () => import('./demo/components/sublotes/sublotes.component').then((c) => c.SublotesComponent),
        canActivate: [authGuard, rolGuard],
        data: {rol: ['Administrador', 'Super Usuario']},
      },
      {
        path: 'tipos-suelos',
        loadComponent: () => import('./demo/components/tipos-suelos/tipos-suelos.component').then((c) => c.TiposSuelosComponent),
        canActivate: [authGuard, rolGuard],
        data: {rol: ['Administrador', 'Super Usuario']},
      },
      {
        path: 'fenologias',
        loadComponent: () => import('./demo/components/fenologias/fenologias.component').then((c) => c.FenologiasComponent),
        canActivate: [authGuard, rolGuard],
        data: {rol: ['Administrador', 'Super Usuario']},
      },
      {
        path: 'variedad-raices',
        loadComponent: () => import('./demo/components/variedad-raices/variedad-raices.component').then((c) => c.VariedadRaicesComponent),
        canActivate: [authGuard, rolGuard],
        data: {rol: ['Administrador', 'Super Usuario']},
      },
      {
        path: 'detalle-raices',
        loadComponent: () => import('./demo/components/detalle-raices/detalle-raices.component').then((c) => c.DetalleRaicesComponent),
        canActivate: [authGuard, rolGuard],
        data: {rol: ['Administrador', 'Super Usuario']},
      },
      {
        path: 'configuracion_procesadores',
        loadComponent: () => import('./demo/components/configuracion-procesadores/configuracion-procesadores.component').then((c) => c.ConfiguracionProcesadoresComponent),
        canActivate: [authGuard, rolGuard],
        data: {rol: ['Administrador', 'Super Usuario']},
      },
      {
        path: 'procesadores',
        loadComponent: () => import('./demo/components/procesadores/procesadores.component').then((c) => c.ProcesadoresComponent),
        canActivate: [authGuard, rolGuard],
        data: {rol: ['Administrador', 'Super Usuario']},
      },
      {
        path: 'rango_guias',
        loadComponent: () => import('./demo/components/rango-guias/rango-guias.component').then((c) => c.RangoGuiasComponent),
        canActivate: [authGuard, rolGuard],
        data: {rol: ['Administrador', 'Super Usuario']},
      }
    ]
  },
  {
    path: 'login',
    loadComponent: ()=> import('./demo/components/auth/login/login.component'),
    canActivate: [authenticatedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}