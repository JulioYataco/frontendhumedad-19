import { Component } from '@angular/core';
import { IFundo } from 'src/app/core/models/ifundo';
import { FundosService } from 'src/app/core/services/entidades/fundos/fundos.service';
import { SHARED_FORMULARIOS_IMPORTS } from 'src/app/shared/shared-imports';
import { BaseMetodosCrud } from '../baseMetodosCrud.component';
import { ISedes } from 'src/app/core/models/isedes';
import { SedesService } from 'src/app/core/services/entidades/sedes/sedes.service';


@Component({
  selector: 'app-fundos',
  imports: [SHARED_FORMULARIOS_IMPORTS],
  templateUrl: './fundos.component.html',
  styleUrl: '../../shared/base-crud/base-crud.component.scss'
})
export class FundosComponent extends BaseMetodosCrud<IFundo>{
  
  sedes: ISedes[] = [];

  constructor(
    protected override modeloService: FundosService,
    private sedesService: SedesService
  ){
    super(modeloService);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.obtenerSedes();
  }

  obtenerSedes(): void {
    this.sedesService.getAll().subscribe(sedes => {
      this.sedes = sedes;
    })
  }

  obtenerNombreSede(idsede: number): string {
    const sede = this.sedes.find(l => l.id === idsede);
    return sede ? sede.nombre_sede : 'Desconocido';
  }

  // fundos: IFundo[] = [];
  // displayModal: boolean = false;
  // fundo: Partial<IFundo> = {}; // Para crear un nuevo fundo
  
  // constructor(private fundosService: FundosService){}

  // ngOnInit(): void {
  //   this.getFundos();
  // }

  // //Carga los datos en el formulario de editar
  // CargarFundo(fundo: IFundo){
  //   this.fundo = { ...fundo }; //Copia objeto
  //   this.displayModal = true; //abre el modal
  // }

  // mostrarDialogo(){
  //   this.displayModal = true;
  //   this.fundo = {sede: 0, nombre_fundo: ''} //Limpia el formulario
  // }

  // //Obtener todos los fundos
  // getFundos(){
  //   this.fundosService.getAll().subscribe(data => {
  //     this.fundos = data;
  //   });
  // }

  // guardarFundos(){
  //   if (this.fundo.id){
  //     //Si tiene id, entonces estamos editando
  //     this.fundosService.update(this.fundo.id, this.fundo).subscribe(() => {
  //       this.getFundos();
  //       this.displayModal = false;
  //     });
  //   }else {
  //     //Si no tiene id, entonces estamos creando
  //     this.fundosService.create(this.fundo).subscribe(() => {
  //       this.getFundos(); //Lista los fundos
  //       this.displayModal = false; //Cierra el model
  //     });
  //   }
  //   //Cuando se cree un fundo correctamente
  // }

  // //Eliminar fundo
  // eliminarFundo(id: number){
  //   this.fundosService.delete(id).subscribe(() => {
  //     this.getFundos();
  //   });
  // }

  
}
