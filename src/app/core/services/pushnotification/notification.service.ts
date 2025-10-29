import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) { }

  addPushSubscriber(sub:PushSubscription){
    return this.http.post(`${environment.apiUrl}/registrar_suscripcion/`, sub, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
