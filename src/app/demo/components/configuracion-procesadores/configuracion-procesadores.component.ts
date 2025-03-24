//import { BaseCrudComponent } from './../../shared/base-crud/base-crud.component';
import { Component, ViewChild } from '@angular/core';
import { IConfiguracionProcesadores } from 'src/app/core/models/iconfiguracion-procesadores';
import { ConfiguracionProcesadoresService } from 'src/app/core/services/entidades/configuracion-procesadores/configuracion-procesadores.service';
import { SHARED_FORMULARIOS_IMPORTS } from 'src/app/shared/shared-imports';
//import { MessageService } from 'primeng/api';
//import { BaseCrudComponent } from '../../shared/base-crud/base-crud.component';
import { Table } from 'primeng/table';
import { BaseMetodosCrud } from '../baseMetodosCrud.component';
import { IProcesadores } from 'src/app/core/models/iprocesadores';
import { ISublotes } from 'src/app/core/models/isublotes';
import { IVariedadCultivos } from 'src/app/core/models/ivariedad-cultivos';
import { ITipoSuelos } from 'src/app/core/models/itipo-suelos';
import { ProcesadoresService } from 'src/app/core/services/entidades/procesadores/procesadores.service';
import { SublotesService } from 'src/app/core/services/entidades/sublotes/sublotes.service';
import { VariedadCultivosService } from 'src/app/core/services/entidades/variedad-cultivos/variedad-cultivos.service';
import { TipoSuelosService } from 'src/app/core/services/entidades/tipo-suelos/tipo-suelos.service';
import { IVariedadRaices } from 'src/app/core/models/ivariedad-raices';
import { VariedadRaicesService } from 'src/app/core/services/entidades/variedad-raices/variedad-raices.service';

@Component({
  selector: 'app-configuracion-procesadores',
  imports: [SHARED_FORMULARIOS_IMPORTS],
  templateUrl: './configuracion-procesadores.component.html',
  styleUrl: '../../shared/base-crud/base-crud.component.scss'
})
export class ConfiguracionProcesadoresComponent extends BaseMetodosCrud<IConfiguracionProcesadores> {

  procesadores: IProcesadores[] = [];
  sublotes: ISublotes[] = [];
  variedades: IVariedadCultivos[] = [];
  tipoSuelos: ITipoSuelos[] = [];
  variedadRaices: IVariedadRaices[] = [];

  constructor(
    protected override modeloService: ConfiguracionProcesadoresService,
    private procesadoresService: ProcesadoresService,
    private sublotesService: SublotesService,
    private variedadCultivoService: VariedadCultivosService,
    private tipoSueloService: TipoSuelosService,
    private variedadRaicesService: VariedadRaicesService
  ){
    super(modeloService);
    this.globalFilterFields = ['id', 'procesador', 'sublote', 'variedad', 'tipo_suelo', 'variedad_raiz', 'edad']; // Campos para el filtro global
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.obtenerProcesadores();
    this.obtenerVariedades();
    this.obtenerTipoSuelos();
    this.obtenerSublotes();
    this.obtenerVariedadRaices();
  }

  //Procesadores
  obtenerProcesadores(): void {
    this.procesadoresService.getAll().subscribe(procesadores => {
      this.procesadores = procesadores;
    });
  }

  obtenerNombreProcesador(idprocesador: number): string {
    const procesador = this.procesadores.find(l => l.id === idprocesador);
    return procesador ? procesador.codigo : 'desconocido';
  }

  //Sublotes
  obtenerSublotes(): void {
    this.sublotesService.getAll().subscribe(sublotes => {
      this.sublotes = sublotes;
    });
  }

  obtenerNombreSublote(idsublote: number): string {
    const sublote = this.sublotes.find(l => l.id === idsublote);
    return sublote ? sublote.nombre_sublote : 'Desconocido';
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

  //Tipos de suelo
  obtenerTipoSuelos(): void {
    this.tipoSueloService.getAll().subscribe(tipoSuelos => {
      this.tipoSuelos = tipoSuelos;
    });
  }

  obtenerNombreTipoSuelo(idtiposuelo: number): string {
    const tiposuelo = this.tipoSuelos.find(l => l.id === idtiposuelo);
    return idtiposuelo ? tiposuelo.nombre_tipo_suelo : 'Desconocido';
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
