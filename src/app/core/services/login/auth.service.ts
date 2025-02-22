import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.apiUrl
  private LOGIN_URL = `${this.url}/LoginView/`;
  
  private REFRESH_URL = `${this.url}/token/refresh/`;

  private LOGOUT_URL = `${this.url}/api/api/cerrarsesion/`;
  constructor(private httpClient: HttpClient, private router: Router, private cookieService: CookieService ) { }

  //Metodo para guardar el token en cookies
  setCookie(nombre: string, valor: string, dias: number){
    const fechaExpiracion = new Date();
    fechaExpiracion.setDate(fechaExpiracion.getDate() + dias);
    this.cookieService.set(nombre, valor, fechaExpiracion, '/')
  }

  //Metodo para obtener el token desde la cookies
  getToken(): string | null {
    return this.cookieService.get("access_token");
  }

  getRefreshToken(): string | null {
    return this.cookieService.get("refresh_token");
  }

  //Guardamos el access token
  saveToken(token: string): void {
    const expiresminutes = new Date(new Date().getTime() + 0.5 * 60 * 1000);
    this.cookieService.set('access_token', token, expiresminutes);
  }

  //Metodo para eliminar token de la cookie
  // deleteCookies(nombre: string){
  //   this.cookieService.delete(nombre, '/');
  // }

  login(username: string, password: string): Observable<any>{
    return this.httpClient.post<any>(this.LOGIN_URL, {username, password}).pipe(
      tap(response =>{
        console.log(response);
        if (response.access_token && response.refresh){
          //Agregamos los token a la cokies
          const expiresminute = new Date(new Date().getTime() + 0.5 * 60 * 1000);
          this.cookieService.set("access_token", response.access_token, expiresminute);
          this.cookieService.set("refresh_token", response.refresh, 7);
          console.log("usuario autenticado");
        }else{
          console.log("error en login");
        }
      })
    );
  }

  refreshToken(): Observable<any> {
    const refresh = this.getRefreshToken();
    return this.httpClient.post<any>(this.REFRESH_URL, { refresh: refresh }).pipe(
      tap(response => {
        console.log("Respuesta de refresh", response);
        if (response.access_token){
          this.saveToken(response.access_token);
          console.log("Token actualizado en cookies", response);
        }
      })
    );
  }

  logout(): void {
    this.cookieService.delete('access_token');
    this.cookieService.delete('refresh_token');
    //window.location.href = '/logintest';
  }
}
