import { Component } from '@angular/core';
import { SHARED_FORMULARIOS_IMPORTS } from 'src/app/shared/shared-imports';
import { BaseCrudComponent } from '../baseCrudComponent.component';
import { IFenologia } from 'src/app/core/models/ifenologia';
import { FenologiasService } from 'src/app/core/services/entidades/fenologias/fenologias.service';

@Component({
  selector: 'app-fenologias',
  imports: [SHARED_FORMULARIOS_IMPORTS],
  templateUrl: './fenologias.component.html',
  styleUrl: './fenologias.component.scss'
})
export class FenologiasComponent extends BaseCrudComponent<IFenologia>{
  constructor(protected override modeloService: FenologiasService){
    super(modeloService);
    this.tituloFormulario = 'Fenologia';
  }
}
