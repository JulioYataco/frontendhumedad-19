import { Component } from '@angular/core';
import { SHARED_FORMULARIOS_IMPORTS } from 'src/app/shared/shared-imports';
import { ILotes } from 'src/app/core/models/ilotes';
import { LotesService } from 'src/app/core/services/entidades/lotes/lotes.service';
//import { MessageService } from 'primeng/api';
import { BaseMetodosCrud } from '../baseMetodosCrud.component';
import { IFundo } from 'src/app/core/models/ifundo';
import { FundosService } from 'src/app/core/services/entidades/fundos/fundos.service';


@Component({
  selector: 'app-lotes',
  imports: [SHARED_FORMULARIOS_IMPORTS],
  templateUrl: './lotes.component.html',
  styleUrl: '../../shared/base-crud/base-crud.component.scss'
})
export class LotesComponent extends BaseMetodosCrud<ILotes>{

  fundos: IFundo[] = [];

  constructor(
    protected override modeloService: LotesService,
    private fundosService: FundosService
  ){
    super(modeloService);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.obtenerFundos();
  }

  obtenerFundos(): void {
    this.fundosService.getAll().subscribe(fundos => {
      this.fundos = fundos;
    });
  }

  obtenerNombreFundo(idfundo: number):string {
    const fundo = this.fundos.find(l => l.id === idfundo);
    return fundo ? fundo.nombre_fundo : 'Desconocido';
  }

}
