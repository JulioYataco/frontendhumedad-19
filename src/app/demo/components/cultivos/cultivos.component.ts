import { Component } from '@angular/core';
import { SHARED_FORMULARIOS_IMPORTS } from 'src/app/shared/shared-imports';
import { ICultivos } from 'src/app/core/models/icultivos';
import { CultivosService } from 'src/app/core/services/entidades/cultivos/cultivos.service';
//import { MessageService } from 'primeng/api';
import { BaseMetodosCrud } from '../baseMetodosCrud.component';


@Component({
  selector: 'app-cultivos',
  imports: [SHARED_FORMULARIOS_IMPORTS],
  templateUrl: './cultivos.component.html',
  styleUrl: '../../shared/base-crud/base-crud.component.scss'
})
export class CultivosComponent extends BaseMetodosCrud<ICultivos>{
  constructor(protected override modeloService: CultivosService){
    super(modeloService);
    //this.tituloFormulario = 'Cultivos';
  }

}
