import { Component } from '@angular/core';
import { IRoles } from 'src/app/core/models/iroles';
import { RolesService } from 'src/app/core/services/entidades/roles/roles.service';
import { SHARED_FORMULARIOS_IMPORTS } from 'src/app/shared/shared-imports';
import { BaseCrudComponent } from '../baseCrudComponent.component';

@Component({
  selector: 'app-roles',
  imports: [SHARED_FORMULARIOS_IMPORTS],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent extends BaseCrudComponent<IRoles>{
  constructor(protected override modeloService: RolesService){
    super(modeloService);
    this.tituloFormulario = 'Roles';
  }
}
