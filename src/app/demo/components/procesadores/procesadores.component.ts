import { Component } from '@angular/core';
import { SHARED_FORMULARIOS_IMPORTS } from 'src/app/shared/shared-imports';
import { BaseCrudComponent } from '../baseCrudComponent.component';
import { ProcesadoresService } from 'src/app/core/services/entidades/procesadores/procesadores.service';
import { IProcesadores } from 'src/app/core/models/iprocesadores';

@Component({
  selector: 'app-procesadores',
  imports: [SHARED_FORMULARIOS_IMPORTS],
  templateUrl: './procesadores.component.html',
  styleUrl: './procesadores.component.scss'
})
export class ProcesadoresComponent extends BaseCrudComponent<IProcesadores>{

  constructor(protected override modeloService: ProcesadoresService){
    super(modeloService);
    this.tituloFormulario = 'Procesadores';
  }

}
