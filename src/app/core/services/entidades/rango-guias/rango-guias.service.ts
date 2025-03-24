// import { BaseGenericoService } from 'src/app/core/services/entidades/base-generico.service';
import { Injectable } from '@angular/core';
import { IRangoGuias } from 'src/app/core/models/irango-guias';
import { BaseGenericoService } from '../base-generico.service';

@Injectable({
  providedIn: 'root'
})
export class RangoGuiasService extends BaseGenericoService<IRangoGuias>{

  constructor() {
    super();
    this.init('rango_guias');
  }
}
