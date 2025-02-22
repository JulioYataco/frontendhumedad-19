import { Injectable } from '@angular/core';
import { BaseGenericoService } from '../base-generico.service';
import { IFenologia } from 'src/app/core/models/ifenologia';

@Injectable({
  providedIn: 'root'
})
export class FenologiasService extends BaseGenericoService<IFenologia>{

  constructor() {
    super();
    this.init('fenologias');
   }
}
