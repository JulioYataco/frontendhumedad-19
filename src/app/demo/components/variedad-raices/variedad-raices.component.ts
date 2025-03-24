import { Component } from '@angular/core';
import { VariedadRaicesService } from 'src/app/core/services/entidades/variedad-raices/variedad-raices.service';
import { SHARED_FORMULARIOS_IMPORTS } from 'src/app/shared/shared-imports';
import { IVariedadRaices } from 'src/app/core/models/ivariedad-raices';
//import { MessageService } from 'primeng/api';
//import { BaseCrudComponent } from '../../shared/base-crud/base-crud.component';
import { BaseMetodosCrud } from '../baseMetodosCrud.component';



@Component({
  selector: 'app-variedad-raices',
  imports: [SHARED_FORMULARIOS_IMPORTS],
  templateUrl: './variedad-raices.component.html',
  styleUrl: '../../shared/base-crud/base-crud.component.scss'
})
export class VariedadRaicesComponent extends BaseMetodosCrud<IVariedadRaices>{

  constructor(
    protected override modeloService: VariedadRaicesService){
    super(modeloService);
    //this.tituloFormulario = 'Variedad Raices';
  }

}
