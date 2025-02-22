import { Component } from '@angular/core';
import { ISedes } from 'src/app/core/models/isedes';
import { SedesService } from 'src/app/core/services/entidades/sedes/sedes.service';
import { SHARED_FORMULARIOS_IMPORTS } from 'src/app/shared/shared-imports';
import { BaseCrudComponent } from '../baseCrudComponent.component';

@Component({
  selector: 'app-sedes',
  imports: [SHARED_FORMULARIOS_IMPORTS],
  templateUrl: './sedes.component.html',
  styleUrl: './sedes.component.scss'
})
export class SedesComponent extends BaseCrudComponent<ISedes>{
  constructor(protected override modeloService: SedesService){
    super(modeloService);
    this.tituloFormulario = 'Sedes';
  }
}
