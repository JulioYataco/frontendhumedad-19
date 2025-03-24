import { Component } from '@angular/core';
import { IDetalleRaices } from 'src/app/core/models/idetalle-raices';
import { DetalleRaicesService } from 'src/app/core/services/entidades/detalle-raices/detalle-raices.service';
import { SHARED_FORMULARIOS_IMPORTS } from 'src/app/shared/shared-imports';
//import { MessageService } from 'primeng/api';
import { BaseMetodosCrud } from '../baseMetodosCrud.component';
import { VariedadCultivosService } from 'src/app/core/services/entidades/variedad-cultivos/variedad-cultivos.service';
import { VariedadRaicesService } from 'src/app/core/services/entidades/variedad-raices/variedad-raices.service';
import { IVariedadCultivos } from 'src/app/core/models/ivariedad-cultivos';
import { IVariedadRaices } from 'src/app/core/models/ivariedad-raices';

@Component({
  selector: 'app-detalle-raices',
  imports: [SHARED_FORMULARIOS_IMPORTS],
  templateUrl: './detalle-raices.component.html',
  styleUrl: '../../shared/base-crud/base-crud.component.scss'
})
export class DetalleRaicesComponent extends BaseMetodosCrud<IDetalleRaices>{

  variedades: IVariedadCultivos[] = [];
  variedadRaices: IVariedadRaices[] = [];

  constructor(
    protected override modeloService: DetalleRaicesService,
    private variedadCultivoService: VariedadCultivosService,
    private variedadRaicesService: VariedadRaicesService
  ){
    super(modeloService);
    this.tituloFormulario = 'Detalle raices';
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.obtenerVariedades();
    this.obtenerVariedadRaices();
  }

  //Variedades
  obtenerVariedades(): void {
    this.variedadCultivoService.getAll().subscribe(variedades => {
      this.variedades = variedades;
    });
  }

  obtenerNombreVariedad(idvariedad: number): string {
    const variedad = this.variedades.find(l => l.id === idvariedad);
    return variedad ? variedad.nombre_variedad : 'Desconocido';
  }

  //Variedad de raices
  obtenerVariedadRaices(): void {
    this.variedadRaicesService.getAll().subscribe(variedadraices => {
      this.variedadRaices = variedadraices;
    });
  }

  obtenerNombreVariedadRaices(id: number): string {
    const variedadraiz = this.variedadRaices.find(l => l.id === id);
    return variedadraiz ? variedadraiz.nombre_variedad_raiz : 'Desconocido';
  }
}
