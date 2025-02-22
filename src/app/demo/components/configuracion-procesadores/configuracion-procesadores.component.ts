import { Component } from '@angular/core';
import { BaseCrudComponent } from '../baseCrudComponent.component';
import { IConfiguracionProcesadores } from 'src/app/core/models/iconfiguracion-procesadores';
import { ConfiguracionProcesadoresService } from 'src/app/core/services/entidades/configuracion-procesadores/configuracion-procesadores.service';
import { SHARED_FORMULARIOS_IMPORTS } from 'src/app/shared/shared-imports';

@Component({
  selector: 'app-configuracion-procesadores',
  imports: [SHARED_FORMULARIOS_IMPORTS],
  templateUrl: './configuracion-procesadores.component.html',
  styleUrl: './configuracion-procesadores.component.scss'
})
export class ConfiguracionProcesadoresComponent extends BaseCrudComponent<IConfiguracionProcesadores> {
  constructor(protected override modeloService: ConfiguracionProcesadoresService ){
    super(modeloService);
  }
}
