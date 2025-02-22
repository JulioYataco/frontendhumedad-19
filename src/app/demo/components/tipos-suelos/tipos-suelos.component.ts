import { Component } from '@angular/core';
import { SHARED_FORMULARIOS_IMPORTS } from 'src/app/shared/shared-imports';
import { BaseCrudComponent } from '../baseCrudComponent.component';
import { ITipoSuelos } from 'src/app/core/models/itipo-suelos';
import { TipoSuelosService } from 'src/app/core/services/entidades/tipo-suelos/tipo-suelos.service';
import { CardComponent } from 'src/app/theme/shared/components/card/card.component';

@Component({
  selector: 'app-tipos-suelos',
  standalone: true,
  imports: [SHARED_FORMULARIOS_IMPORTS, CardComponent],
  templateUrl: './tipos-suelos.component.html',
  styleUrl: './tipos-suelos.component.scss'
})
export class TiposSuelosComponent extends BaseCrudComponent<ITipoSuelos>{
  constructor(protected override modeloService: TipoSuelosService){
    super(modeloService);
    this.tituloFormulario = 'Tipo suelos';
  }
}
