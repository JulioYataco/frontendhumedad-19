import { Injectable } from '@angular/core';
import { BaseGenericoService } from '../base-generico.service';
import { IVariedadRaices } from 'src/app/core/models/ivariedad-raices';

@Injectable({
  providedIn: 'root'
})
export class VariedadRaicesService extends BaseGenericoService<IVariedadRaices>{

  constructor() {
    super();
    this.init('variedades_raices');
   }
}
