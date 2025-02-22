import { Injectable } from '@angular/core';
import { BaseGenericoService } from '../base-generico.service';
import { IVariedadCultivos } from 'src/app/core/models/ivariedad-cultivos';

@Injectable({
  providedIn: 'root'
})
export class VariedadCultivosService extends BaseGenericoService<IVariedadCultivos>{

  constructor() {
    super();
    this.init('variedades');
   }
}
