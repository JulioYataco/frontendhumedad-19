import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { TiposSuelosStore } from '../../state/tipos-suelos.store';
import { ITipoSuelos } from '../../models/itipo-suelos';
import { TiposSuelosFormComponent } from '../../components/tipos-suelos-form/tipos-suelos-form.component';
import { CommonModule } from '@angular/common';
import { BaseCrudComponent } from 'src/app/shared/ui/base-crud/base-crud.component';
                      // import { ConfirmService } from 'src/app/shared/ui/confirm/confirm.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
// import { ToastService } from 'src/app/shared/ui/toast/toast.service';
import { BaseCrudPage } from 'src/app/shared/ui/page/base-crud.page';
// import { error } from 'console';
// import { MessageService } from 'primeng/api';
// import { CrudColumn } from 'src/app/shared/utils/crud-column';

@Component({
  selector: 'app-tipos-suelos',
  imports: [
    CommonModule,
    BaseCrudComponent,
    TiposSuelosFormComponent
  ],
  templateUrl: './tipos-suelos.page.html',
  styleUrl: './tipos-suelos.page.scss',
})
export class TiposSuelosPage extends BaseCrudPage<ITipoSuelos> implements OnInit {

  store = inject(TiposSuelosStore);
  private destroyRef = inject(DestroyRef);

  // Estado de UI
  selectedItem = signal<ITipoSuelos | null>(null);

  ngOnInit() {
    this.store  
    .load()
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe({
      error: () => {
        this.toast.error('Error', 'No se pudieron cargar los tipos de suelos');
      }
    });
  }

  onCreate() {
    // abrir modal / navegar
    this.openCreate();
  }

  onEdit(item: ITipoSuelos) {
    // abrir modal / navegar
    this.openEdit(item);
  }

  async onDelete(item: ITipoSuelos) {
    
    await this.confirmDelete(
      item,
      (id) => this.store.delete(id).subscribe({
        next: () => this.toast.success('Eliminado'),
        error: () => this.toast.error('Error al eliminar'),
      }),
      item.nombre_tipo_suelo
    );
  }

  onSubmit(data: Partial<ITipoSuelos>) {
    const current = this.selectedItem();

    const action$ = current
      ? this.store.update(current.id, data)
      : this.store.create(data);

    action$.subscribe({
      next: () => {
        this.toast.success(
          current ? 'Actualizado' : 'Creado', 
          `Registro ${current ? 'actualizado' : 'creado'} correctamente`
        );
        this.showForm.set(false);
      },
      error: () => {
        this.toast.error(
          'Error', 
          `No se pudo ${current ? 'actualizar' : 'crear'} el registro`
        );
      }
    });
  }

  onCancel() {
    this.closeForm();
  }
}

// actions = [
//   {
//     label: 'Editar',
//     variant: 'primary',
//     action: (item: ITipoSuelos) => this.onEdit(item),
//   },
//   {
//     label: 'Eliminar',
//     variant: 'danger',
//     action: (item: ITipoSuelos) => this.store.delete(item.id),
//   },
// ];

// columns: CrudColumn<ITipoSuelos>[] = [
//   { header: 'Nombre', field: 'nombre_tipo_suelo' },
//   { header: 'Capacidad retención', field: 'capacidad_retencion_agua' },
//   { header: 'Drenaje', field: 'drenaje' },
// ];