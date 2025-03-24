import { Component } from '@angular/core';
import { SHARED_FORMULARIOS_IMPORTS } from 'src/app/shared/shared-imports';
import { ProcesadoresService } from 'src/app/core/services/entidades/procesadores/procesadores.service';
import { IProcesadores } from 'src/app/core/models/iprocesadores';
//import { MessageService } from 'primeng/api';
import { BaseMetodosCrud } from '../baseMetodosCrud.component';


@Component({
  selector: 'app-procesadores',
  imports: [SHARED_FORMULARIOS_IMPORTS],
  templateUrl: './procesadores.component.html',
  styleUrl: '../../shared/base-crud/base-crud.component.scss'
})
export class ProcesadoresComponent extends BaseMetodosCrud<IProcesadores>{

  tipoSensores = [
    {id: 1, nombre_tipo_sensor: 'Humedad'}
  ]

  constructor(protected override modeloService: ProcesadoresService){
    super(modeloService);
  }

  obtenerNombreTipoSuelo(id: number): string {
    const tiposensor = this.tipoSensores.find(l => l.id === id);
    return tiposensor ? tiposensor.nombre_tipo_sensor : 'Desconocido';
  }

}
