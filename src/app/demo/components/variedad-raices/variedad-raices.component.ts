import { Component } from '@angular/core';
import { VariedadRaicesService } from 'src/app/core/services/entidades/variedad-raices/variedad-raices.service';
import { SHARED_FORMULARIOS_IMPORTS } from 'src/app/shared/shared-imports';
import { BaseCrudComponent } from '../baseCrudComponent.component';
import { IVariedadRaices } from 'src/app/core/models/ivariedad-raices';

@Component({
  selector: 'app-variedad-raices',
  imports: [SHARED_FORMULARIOS_IMPORTS],
  templateUrl: './variedad-raices.component.html',
  styleUrl: './variedad-raices.component.scss'
})
export class VariedadRaicesComponent extends BaseCrudComponent<IVariedadRaices>{

  constructor(protected override modeloService: VariedadRaicesService){
    super(modeloService);
    this.tituloFormulario = 'Variedad Raices';
  }

}
