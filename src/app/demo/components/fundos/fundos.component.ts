import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IFundo } from 'src/app/core/models/ifundo';
import { FundosService } from 'src/app/core/services/entidades/fundos/fundos.service';
import { CardComponent } from 'src/app/theme/shared/components/card/card.component';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { BaseCrudComponent } from '../baseCrudComponent.component';

@Component({
  selector: 'app-fundos',
  imports: [
    CommonModule,         //Importa funciones basicas ngIf, ngFor, ngClass, etc.
    FormsModule,          //Habilita el uso de ngModel para hacer formularios basados en planillas
    ReactiveFormsModule,  //Para manejar formularios reactivos
    InputTextModule,      //Permite usar pinputText para mejorar la apariencia de los inputs
    ButtonModule,         //Permite usar pButton
    TableModule,          //Permite usar <p-table></p-table> para mostrar datos dinamicamente
    DialogModule,          //Permite usar <p-dialog></p-dialog>
    CardComponent,         //Permite usar <app-card></app-card>
    RippleModule
  ],
  templateUrl: './fundos.component.html',
  styleUrl: './fundos.component.scss'
})
export class FundosComponent extends BaseCrudComponent<IFundo>{
  
  constructor(protected override modeloService: FundosService){
    super(modeloService);
    this.tituloFormulario = 'Fundos';
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
