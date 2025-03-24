import { Component } from '@angular/core';
import { SHARED_FORMULARIOS_IMPORTS } from 'src/app/shared/shared-imports';
import { ITipoSuelos } from 'src/app/core/models/itipo-suelos';
import { TipoSuelosService } from 'src/app/core/services/entidades/tipo-suelos/tipo-suelos.service';
//import { MessageService } from 'primeng/api';
import { BaseMetodosCrud } from '../baseMetodosCrud.component';


@Component({
  selector: 'app-tipos-suelos',
  standalone: true,
  imports: [SHARED_FORMULARIOS_IMPORTS],
  templateUrl: './tipos-suelos.component.html',
  styleUrl: '../../shared/base-crud/base-crud.component.scss'
})
export class TiposSuelosComponent extends BaseMetodosCrud<ITipoSuelos>{
  constructor(protected override modeloService: TipoSuelosService){
    super(modeloService);
  }
}
