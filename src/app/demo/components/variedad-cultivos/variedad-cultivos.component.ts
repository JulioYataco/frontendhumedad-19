import { Component } from '@angular/core';
import { SHARED_FORMULARIOS_IMPORTS } from 'src/app/shared/shared-imports';
import { IVariedadCultivos } from 'src/app/core/models/ivariedad-cultivos';
import { VariedadCultivosService } from 'src/app/core/services/entidades/variedad-cultivos/variedad-cultivos.service';
//import { MessageService } from 'primeng/api';
import { BaseMetodosCrud } from '../baseMetodosCrud.component';
import { ICultivos } from 'src/app/core/models/icultivos';
import { CultivosService } from 'src/app/core/services/entidades/cultivos/cultivos.service';


@Component({
  selector: 'app-variedad-cultivos',
  imports: [SHARED_FORMULARIOS_IMPORTS],
  templateUrl: './variedad-cultivos.component.html',
  styleUrl: '../../shared/base-crud/base-crud.component.scss'
})
export class VariedadCultivosComponent extends BaseMetodosCrud<IVariedadCultivos>{
  
  cultivos: ICultivos[] = [];

  constructor(
    protected override modeloService: VariedadCultivosService,
    private cultivosService: CultivosService
  ){
    super(modeloService);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.obtenerCultivos();
  }

  obtenerCultivos(): void {
    this.cultivosService.getAll().subscribe(cultivos => {
      this.cultivos = cultivos;
    });
  }

  obtenerNombreCultivo(idcultivo: number): string {
    const cultivo = this.cultivos.find(l => l.id === idcultivo);
    return cultivo ? cultivo.nombre_cultivo : 'Desconocido';
  }
}
