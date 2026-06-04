import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export abstract class BaseGenericoService<T> {

  protected http = inject(HttpClient);
  protected abstract endpoint: string;

  protected get apiUrl() {
    return `${environment.apiUrl}/${this.endpoint}`;
  }

  list() {
    return this.http.get<T[]>(`${this.apiUrl}`);
  }

  getById(id: number) {
    return this.http.get<T>(`${this.apiUrl}/${id}/`);
  }

  create(data: Partial<T>) {
    return this.http.post<T>(`${this.apiUrl}/`, data);
  }

  update(id: number, data: Partial<T>) {
    return this.http.put<T>(`${this.apiUrl}/${id}/`, data);
  }

  patch(id: number, data: Partial<T>) {
    return this.http.patch<T>(`${this.apiUrl}/${id}/`, data);
  }

  delete(id: number) {
    return this.http.delete<void>(`${this.apiUrl}/${id}/`);
  }

  // create(data: Partial<T>) {
  //   return this.http.post<T>(this.apiUrl, data);
  // }

  // update(id: number, data: Partial<T>) {
  //   return this.http.put<T>(`${this.apiUrl}/${id}`, data);
  // }

  // delete(id: number) {
  //   return this.http.delete<void>(`${this.apiUrl}/${id}`);
  // }
}
