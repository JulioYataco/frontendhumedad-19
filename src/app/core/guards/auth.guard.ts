import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/login/auth.service';
import { inject } from '@angular/core';
import { catchError, of, switchMap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const token = authService.getToken();

  if(token){
    console.log("guards token activo:", token);
    return true;
  }

  return authService.refreshToken().pipe(
    switchMap(newToken => {
      authService.saveToken(newToken.access);
      return of(true);
    }),
    catchError(()=>{
      router.navigate(['/logintest']);
      return of(false);
    })
  )
};
