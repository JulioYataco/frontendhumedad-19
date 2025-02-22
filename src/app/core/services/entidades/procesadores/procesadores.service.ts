import { Injectable } from '@angular/core';
import { BaseGenericoService } from '../base-generico.service';
import { IProcesadores } from 'src/app/core/models/iprocesadores';

@Injectable({
  providedIn: 'root'
})
export class ProcesadoresService extends BaseGenericoService<IProcesadores> {

  constructor() {
    super();
    this.init('procesadores');
   }
}
