import { Injectable } from '@angular/core';
import { BaseGenericoService } from '../base-generico.service';
import { IUbigeos } from 'src/app/core/models/iubigeos';

@Injectable({
  providedIn: 'root'
})
export class UbigeosService extends BaseGenericoService<IUbigeos>{
  
  constructor() { 
    super();
    this.init('ubigeos');
  }

}
