import { Component } from '@angular/core';
import { SHARED_FORMULARIOS_IMPORTS } from 'src/app/shared/shared-imports';
import { BaseCrudComponent } from '../baseCrudComponent.component';
import { ICultivos } from 'src/app/core/models/icultivos';
import { CultivosService } from 'src/app/core/services/entidades/cultivos/cultivos.service';

@Component({
  selector: 'app-cultivos',
  imports: [SHARED_FORMULARIOS_IMPORTS],
  templateUrl: './cultivos.component.html',
  styleUrl: './cultivos.component.scss'
})
export class CultivosComponent extends BaseCrudComponent<ICultivos>{
  constructor(protected override modeloService: CultivosService){
    super(modeloService);
    this.tituloFormulario = 'Cultivos';
  }

}
