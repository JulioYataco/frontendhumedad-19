import { Component } from '@angular/core';
import { SHARED_FORMULARIOS_IMPORTS } from 'src/app/shared/shared-imports';
import { IFenologia } from 'src/app/core/models/ifenologia';
import { FenologiasService } from 'src/app/core/services/entidades/fenologias/fenologias.service';
//import { MessageService } from 'primeng/api';
import { BaseMetodosCrud } from '../baseMetodosCrud.component';
import { IVariedadCultivos } from 'src/app/core/models/ivariedad-cultivos';
import { VariedadCultivosService } from 'src/app/core/services/entidades/variedad-cultivos/variedad-cultivos.service';
import { ITipoSuelos } from 'src/app/core/models/itipo-suelos';
import { TipoSuelosService } from 'src/app/core/services/entidades/tipo-suelos/tipo-suelos.service';
import { ICultivos } from 'src/app/core/models/icultivos';
import { CultivosService } from 'src/app/core/services/entidades/cultivos/cultivos.service';


@Component({
  selector: 'app-fenologias',
  imports: [SHARED_FORMULARIOS_IMPORTS],
  templateUrl: './fenologias.component.html',
  styleUrl: '../../shared/base-crud/base-crud.component.scss'
})
export class FenologiasComponent extends BaseMetodosCrud<IFenologia>{
  
  variedades: IVariedadCultivos[] = [];
  tipoSuelos: ITipoSuelos[] = [];

  //Estos sirven para filrar variedad por cultivo
  cultivos: ICultivos[] = [];
  cultivoSeleccionado: number | null = null;
  variedadesFiltrados: IVariedadCultivos[] = [];

  constructor(
    protected override modeloService: FenologiasService,
    private variedadCultivoService: VariedadCultivosService,
    private tipoSueloService: TipoSuelosService,
    private cultivoService: CultivosService
  ){
    super(modeloService);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.obtenerVariedades();
    this.obtenerTipoSuelos();
    this.obtenerCultivos();
  }

  override cerrarDialogo(): void {
    super.cerrarDialogo();
    this.cultivoSeleccionado = null;
    this.variedadesFiltrados = [];
  }

  override CargarDatosModal(entidad: IFenologia): void {
    super.CargarDatosModal(entidad);
    this.entidad = {
      ...entidad,
      inicio: entidad.inicio ? new Date(entidad.inicio): null,
      duracion: entidad.duracion ? new Date(entidad.duracion): null,
    };
    //Obtenemos la variable
    const variedadSeleccionado = this.variedades.find(variedad => variedad.id === entidad.variedad);
  
    if (variedadSeleccionado){
      this.cultivoSeleccionado = variedadSeleccionado.cultivo;
      this.cargarVariedadesPorCultivo(variedadSeleccionado.cultivo);
    }
    this.entidad.variedad = entidad.variedad;
  }

  obtenerCultivos(): void {
    this.cultivoService.getAll().subscribe(cultivos => {
      this.cultivos = cultivos;
    });
  }

  cargarVariedadesPorCultivo(idcultivo: number): void{
    if(idcultivo){
      this.variedadesFiltrados = this.variedades.filter(variedad => variedad.cultivo === idcultivo);
      this.entidad.variedad = null;
    } else {
      this.variedadesFiltrados = [];
    }
  }

  obtenerNombreCultivo(idcultivo: number): string {
    const cultivo = this.cultivos.find(l => l.id === idcultivo);
    return cultivo ? cultivo.nombre_cultivo : 'Desconocido';
  }

  obtenerVariedades(): void {
    this.variedadCultivoService.getAll().subscribe(variedades => {
      this.variedades = variedades;
    });
  }

  obtenerNombreVariedad(idvariedad: number): string {
    const variedad = this.variedades.find(l => l.id === idvariedad);
    return variedad ? variedad.nombre_variedad : 'Desconocido';
  }

  obtenerTipoSuelos(): void {
    this.tipoSueloService.getAll().subscribe(tipoSuelos => {
      this.tipoSuelos = tipoSuelos;
    });
  }

  obtenerNombreTipoSuelo(idtiposuelo: number): string {
    const tiposuelo = this.tipoSuelos.find(l => l.id === idtiposuelo);
    return idtiposuelo ? tiposuelo.nombre_tipo_suelo : 'Desconocido';
  }

}
