import { Injectable } from '@angular/core';
import { BaseGenericoService } from '../base-generico.service';
import { ISedes } from 'src/app/core/models/isedes';

@Injectable({
  providedIn: 'root'
})
export class SedesService extends BaseGenericoService<ISedes>{

  constructor() { 
    super();
    this.init('sedes');
  }
}
