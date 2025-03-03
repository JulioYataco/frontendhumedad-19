import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LecturahumedadService {
  private apiUrl = environment.apiUrl;
  private lecturaurl = `${this.apiUrl}/obtener_lecturas_formateada_idconfig/`
  private configuracionUrl = `${this.apiUrl}/Configuracion_listar/`

  constructor(private httpClient: HttpClient) { }

  configuracionProcesadores(): Observable<any> {
    return this.httpClient.get<any>(this.configuracionUrl)
  }

  listaLecturasHumedad(configuracionId: number): Observable<any> {
    return this.httpClient.get<any>(`${this.lecturaurl}?configuracion_id=${configuracionId}`);
  }
}
