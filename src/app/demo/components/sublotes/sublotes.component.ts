import { ILotes } from 'src/app/core/models/ilotes';
import { Component } from '@angular/core';
import { ISublotes } from 'src/app/core/models/isublotes';
import { SublotesService } from 'src/app/core/services/entidades/sublotes/sublotes.service';
import { SHARED_FORMULARIOS_IMPORTS } from 'src/app/shared/shared-imports';
import { BaseMetodosCrud } from '../baseMetodosCrud.component';
import { LotesService } from 'src/app/core/services/entidades/lotes/lotes.service';
import { IVariedadCultivos } from 'src/app/core/models/ivariedad-cultivos';
import { VariedadCultivosService } from 'src/app/core/services/entidades/variedad-cultivos/variedad-cultivos.service';
import { IFundo } from 'src/app/core/models/ifundo';
import { FundosService } from 'src/app/core/services/entidades/fundos/fundos.service';
import { ICultivos } from 'src/app/core/models/icultivos';
import { CultivosService } from 'src/app/core/services/entidades/cultivos/cultivos.service';

@Component({
  selector: 'app-sublotes',
  imports: [SHARED_FORMULARIOS_IMPORTS],
  templateUrl: './sublotes.component.html',
  styleUrl: '../../shared/base-crud/base-crud.component.scss'
})
export class SublotesComponent extends BaseMetodosCrud<ISublotes> {
  
  //Añadimos estas variables del tipo correspondiente para almacenar la lista de datos de cada entidad
  lotes: ILotes[] = [];
  variedades: IVariedadCultivos[] = [];

  //Estos serviran para poder tener llegar al lote esperado
  fundos: IFundo[] = [];
  fundoSeleccionado: number | null = null; //Almacena el id del fundo seleccionado
  lotesFiltrados: ILotes[] = [];

  //Estos sirven para filrar variedad por cultivo
  cultivos: ICultivos[] = [];
  cultivoSeleccionado: number | null = null; //Almacena el id del fundo seleccionado
  variedadesFiltrados: IVariedadCultivos[] = [];

  //Instanciamos los services de cada entidad para poder realizar el getall
  constructor(
    protected override modeloService: SublotesService,
    private lotesService: LotesService,
    private variedadService: VariedadCultivosService,
    //Releno
    private fundosService: FundosService,
    private cultivosService: CultivosService
  ){
    super(modeloService);
  }

  //Sobreescribimos el OnInit para cargar los datos
  override ngOnInit(): void {
    super.ngOnInit();
    this.obtenerLotes();
    this.obtenerVariedades();
    //Relleno
    this.obtenerFundos();
    this.obtenerCultivos();
  }

  override CargarDatosModal(entidad: ISublotes): void {
    super.CargarDatosModal(entidad);

    //Obtenemos el fundo_id del lote seleccionado
    const loteSeleccionado = this.lotes.find(lote => lote.id === entidad.lote);
    //Obtenemos la variabl (id) del cultivo 
    const variedadSeleccionado = this.variedades.find(variedad => variedad.id === entidad.variedad);
    if (loteSeleccionado && variedadSeleccionado) {
      this.fundoSeleccionado = loteSeleccionado.fundo; //Asignamos el fundo(id) al seleccionable
      this.cargarLotesPorFundo(loteSeleccionado.fundo);
      this.cultivoSeleccionado = variedadSeleccionado.cultivo;
      this.cargarVariedadesPorCultivo(variedadSeleccionado.cultivo);
    }
    this.entidad.lote = entidad.lote; //Asignar el id del lote seleccionado
    this.entidad.variedad = entidad.variedad; //Asigna el id de la variedad seleccionada

    //this.cargarLotesPorFundo(entidad.lote);
    //this.cargarVariedadesPorCultivo(entidad.variedad);
  }

  override cerrarDialogo(): void{
    super.cerrarDialogo();
    this.cultivoSeleccionado = null;
    this.lotesFiltrados = [];
    this.fundoSeleccionado = null; //Almacena el id del fundo seleccionado
    this.variedadesFiltrados = [];
  }

  //Llamamos al metodo encargada de listar los datos de la entidad
  obtenerLotes(): void {
    this.lotesService.getAll().subscribe(lotes => {
      //Asignamos la lista a la variable que creamos
      this.lotes = lotes;
      this.lotesFiltrados = lotes;
    });
  }

  cargarLotesPorFundo(idfundo: number): void {
    if (idfundo){
      this.lotesFiltrados = this.lotes.filter(lote => lote.fundo === idfundo);
      this.entidad.lote = null; // Limpia la selección de lotes
    } else {
      this.lotesFiltrados = [];
    }
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

  //Eso sirve para mostrar el nombre pero mantener el valor internamente como id
  obtenerNombreLote(idlote: number):string { //Este metodo lo usaremos en el html {{obtenerNombreLote(entidad.lote)}} de este modo mostramos el nombre de lote de acuerdo al id
    //almacenamos en una constante la lista, identificando que id sera igual al id que posteriormente se le pasara en el html ejemplo:(entidad.lote) seria igual a 1, 2, 3...
    const lote = this.lotes.find(l => l.id === idlote);
    //retornamos el nombre_lote de la lote y condicionamos para cuando no coincida mestre el valor 'Desconocido' 
    return lote ? lote.nombre_lote : 'Desconocido';
  }

  obtenerVariedades(): void {
    this.variedadService.getAll().subscribe(variedades =>{
      this.variedades = variedades;
      this.variedadesFiltrados = variedades;
    });
  }

  cargarVariedadesPorCultivo(idcultivo: number): void {
    if (idcultivo){
      this.variedadesFiltrados = this.variedades.filter(variedad => variedad.cultivo === idcultivo);
      this.entidad.variedad = null;
    } else {
    this.variedadesFiltrados = [];
    }
  }

  obtenerNombreVariedad(idvariedad: number):string {
    const variedad = this.variedades.find(l => l.id === idvariedad);
    return variedad ? variedad.nombre_variedad : 'Desconocido';
  }

  //Relleno 
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
