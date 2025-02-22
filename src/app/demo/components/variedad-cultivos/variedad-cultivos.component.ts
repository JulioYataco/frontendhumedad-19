import { Component } from '@angular/core';
import { SHARED_FORMULARIOS_IMPORTS } from 'src/app/shared/shared-imports';
import { BaseCrudComponent } from '../baseCrudComponent.component';
import { IVariedadCultivos } from 'src/app/core/models/ivariedad-cultivos';
import { VariedadCultivosService } from 'src/app/core/services/entidades/variedad-cultivos/variedad-cultivos.service';


@Component({
  selector: 'app-variedad-cultivos',
  imports: [SHARED_FORMULARIOS_IMPORTS],
  templateUrl: './variedad-cultivos.component.html',
  styleUrl: './variedad-cultivos.component.scss'
})
export class VariedadCultivosComponent extends BaseCrudComponent<IVariedadCultivos>{
  constructor(protected override modeloService: VariedadCultivosService){
    super(modeloService);
    this.tituloFormulario = 'Variedad cultivos';
  }
}
