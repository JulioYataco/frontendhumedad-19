import { Injectable } from '@angular/core';
import { ITipoSuelos } from 'src/app/demo/tipos-suelos/models/itipo-suelos';
import { BaseGenericoService } from 'src/app/core/http/base-generico.service';

@Injectable({
  providedIn: 'root',
})
export class TiposSuelosService extends BaseGenericoService<ITipoSuelos> {
  protected endpoint = 'tipo_suelos';
}
