import { Component } from '@angular/core';
import { SHARED_FORMULARIOS_IMPORTS } from 'src/app/shared/shared-imports';
import { RangoGuiasService } from 'src/app/core/services/entidades/rango-guias/rango-guias.service';
import { BaseCrudComponent } from '../../shared/base-crud/base-crud.component';

@Component({
  selector: 'app-rango-guias',
  imports: [SHARED_FORMULARIOS_IMPORTS, BaseCrudComponent],
  templateUrl: './rango-guias.component.html',
  styleUrl: './rango-guias.component.scss'
})
export class RangoGuiasComponent {

  columns = [
    { field: 'id', header: 'ID' },
    { field: 'gt', header: 'GT' },
    { field: 'lte', header: 'LTE' },
    { field: 'name', header: 'NAME' },
    { field: 'color', header: 'COLOR' },
    { field: 'type', header: 'TIPO DE LINEA' }
  ];

  formFields = [
    {field: 'id', label: 'Id'},
    {field: 'gt', label: 'Gt'},
    {field: 'lte', label: 'Lte'},
    {field: 'name', label: 'Name'},
    {field: 'color', label: 'Color'},
    {field: 'type', label: 'Tipo de línea'}
  ];

  constructor(public rangoguiaService: RangoGuiasService){}
}
