import { Component } from '@angular/core';
import { BaseCrudComponent } from '../baseCrudComponent.component';
import { ISublotes } from 'src/app/core/models/isublotes';
import { SublotesService } from 'src/app/core/services/entidades/sublotes/sublotes.service';
import { SHARED_FORMULARIOS_IMPORTS } from 'src/app/shared/shared-imports';

@Component({
  selector: 'app-sublotes',
  imports: [SHARED_FORMULARIOS_IMPORTS],
  templateUrl: './sublotes.component.html',
  styleUrl: './sublotes.component.scss'
})
export class SublotesComponent extends BaseCrudComponent<ISublotes> {
  constructor(protected override modeloService: SublotesService){
    super(modeloService);
    this.tituloFormulario = 'Sublote';
  }
}
