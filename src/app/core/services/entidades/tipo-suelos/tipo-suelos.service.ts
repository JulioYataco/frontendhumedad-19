import { Injectable } from '@angular/core';
import { BaseGenericoService } from '../base-generico.service';
import { ITipoSuelos } from 'src/app/core/models/itipo-suelos';

@Injectable({
  providedIn: 'root'
})
export class TipoSuelosService extends BaseGenericoService<ITipoSuelos>{

  constructor() { 
    super();
    this.init('tipo_suelos');
  }
}
