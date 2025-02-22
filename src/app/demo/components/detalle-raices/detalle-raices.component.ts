import { Component } from '@angular/core';
import { BaseCrudComponent } from '../baseCrudComponent.component';
import { IDetalleRaices } from 'src/app/core/models/idetalle-raices';
import { DetalleRaicesService } from 'src/app/core/services/entidades/detalle-raices/detalle-raices.service';
import { SHARED_FORMULARIOS_IMPORTS } from 'src/app/shared/shared-imports';

@Component({
  selector: 'app-detalle-raices',
  imports: [SHARED_FORMULARIOS_IMPORTS],
  templateUrl: './detalle-raices.component.html',
  styleUrl: './detalle-raices.component.scss'
})
export class DetalleRaicesComponent extends BaseCrudComponent<IDetalleRaices>{

  constructor(protected override modeloService: DetalleRaicesService){
    super(modeloService);
    this.tituloFormulario = 'Detalle raices';
  }
}
