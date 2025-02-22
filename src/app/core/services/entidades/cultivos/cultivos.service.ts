import { Injectable } from '@angular/core';
import { BaseGenericoService } from '../base-generico.service';
import { ICultivos } from 'src/app/core/models/icultivos';

@Injectable({
  providedIn: 'root'
})
export class CultivosService extends BaseGenericoService<ICultivos>{

  constructor() {
    super();
    this.init('cultivos');
   }
}
