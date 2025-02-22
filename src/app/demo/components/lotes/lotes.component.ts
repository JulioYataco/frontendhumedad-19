import { Component } from '@angular/core';
import { SHARED_FORMULARIOS_IMPORTS } from 'src/app/shared/shared-imports';
import { BaseCrudComponent } from '../baseCrudComponent.component';
import { ILotes } from 'src/app/core/models/ilotes';
import { LotesService } from 'src/app/core/services/entidades/lotes/lotes.service';

@Component({
  selector: 'app-lotes',
  imports: [SHARED_FORMULARIOS_IMPORTS],
  templateUrl: './lotes.component.html',
  styleUrl: './lotes.component.scss'
})
export class LotesComponent extends BaseCrudComponent<ILotes>{

  constructor(protected override modeloService: LotesService){
    super(modeloService);
    this.tituloFormulario = 'Lotes';
  }

}
