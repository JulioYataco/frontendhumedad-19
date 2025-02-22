import { Injectable } from '@angular/core';
import { BaseGenericoService } from '../base-generico.service';
import { IDetalleRaices } from 'src/app/core/models/idetalle-raices';

@Injectable({
  providedIn: 'root'
})
export class DetalleRaicesService extends BaseGenericoService<IDetalleRaices>{

  constructor() {
    super();
    this.init('detalles_raices');
   }
}
