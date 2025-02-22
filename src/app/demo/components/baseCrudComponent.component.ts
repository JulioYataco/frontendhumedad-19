import { Directive, OnInit } from "@angular/core";
import { BaseGenericoService } from "src/app/core/services/entidades/base-generico.service";

//export: permite usar la clase en otros archivos
//Para que angular reconozca la clase
@Directive() //lo usamos porque las clases bases no pueden ser un componente directo, al no tener select, template, styleUrls
export abstract class BaseCrudComponent<T> implements OnInit{
    lista: T[] = []; //arreglo de elementos del tipo T que se inicializa como un arreglo vacio
    displayModal: boolean = false;
    entidad: Partial<T> = {}; //Usamos partial para decir que la entidad no esta obligada a tener todas sus propiedades
    entidadcompleta!: T ; //Objeto del tipo T, con el operador "!" Inidca que siempre tendra valor antes de usarse
    tituloFormulario: string = '';

    constructor(protected modeloService: BaseGenericoService<T>){}

    //Inicializa traendo el metodo getdata
    ngOnInit(): void {
        this.getData();
    }

    //Obtener todos los fundos
    getData(){
        this.modeloService.getAll().subscribe(data => {
            this.lista = data;
            console.log("lista:", data);
        });
    }

    mostrarDialogo(){
        this.displayModal = true;
        this.entidad = {} //Limpia el formulario
    }

    CargarDatosModal(entidad: T) {
        this.entidad = { ...entidad }; //Copia objeto
        console.log("datos a editas:", entidad);
        this.displayModal = true; //abre el modal
    }

    guardar() {
        if ((this.entidad as any).id) {
            // Si tiene id, entonces es edición
            this.modeloService.update((this.entidad as any).id, this.entidad).subscribe(() => {
                this.getData();
                this.displayModal = false;
            });
        } else {
            // Si no tiene id, entonces es creación
            this.modeloService.create(this.entidad).subscribe(() => {
                this.getData();
                this.displayModal = false;
            });
        }
    }

    //Eliminar fundo
    eliminar(id: number){
        this.modeloService.delete(id).subscribe(() => {
            this.getData();
        });
    }

}