import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
//Clase generica = Trabaja con cualquier tipo de datos

//Esto es una clase generica que podremos reutilizar en los servicios que manejan las mismas peticiones
export class BaseGenericoService<T> { //con T inidicamos que la clase es generica
  private httpClient = inject(HttpClient);
  private apiUrl: string; //para guardar la url
  
  init(rutaEntidad: string){
    this.apiUrl = `${environment.apiUrl}/${rutaEntidad}`;
  }

  private headers = new HttpHeaders({ //la clase httpHeaders permite definir encabezados
    'Content-Type': 'application/json' //Cuerpo de la solicitud en formato json
  });

  //Los observables son para manejar programación reactiva
  getAll(): Observable<T[]>{ //Este metodo retorna datos que emitira un arreglo de elementos de tipo T(al ser generico, cualquier tipo de dato que se define en los demas servicos)
    return this.httpClient.get<T[]>(this.apiUrl, {headers: this.headers});
  }

  getById(id: number): Observable<T> {
    return this.httpClient.get<T>(`${this.apiUrl}/${id}`);
  }

  create(data: Partial<T>): Observable<T> {
    return this.httpClient.post<T>(`${this.apiUrl}/`, data);
  }

  update(id: number, data: Partial<T>): Observable<T> {
    return this.httpClient.put<T>(`${this.apiUrl}/${id}/`, data);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}/`);
  }

}
