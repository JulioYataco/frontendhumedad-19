import { Injectable } from '@angular/core';
import { BaseGenericoService } from '../base-generico.service';
import { IConfiguracionProcesadores } from 'src/app/core/models/iconfiguracion-procesadores';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionProcesadoresService extends BaseGenericoService<IConfiguracionProcesadores>{

  constructor() { 
    super();
    this.init('configuracion_procesadores');
  }
}
