import { NgTemplateOutlet } from '@angular/common';
import { Component, contentChild, input, output, TemplateRef } from '@angular/core';
// import { CrudAction } from './crud-action';
// import { CrudColumn } from '../../utils/crud-column';

@Component({
  selector: 'app-base-crud',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './base-crud.component.html',
  styleUrl: './base-crud.component.scss',
})
export class BaseCrudComponent<T> {

  // --- Inputs (Signals) ---
  //input.required: Lanza error en compilación si el padre no envía 'items'
  items = input.required<T[]>(); 
  loading = input(false);
  // columns = input.required<CrudColumn<T>[]>();
  title = input<string>();
  // actions = input<CrudAction<T>[]>([]);

  // // --- Outputs (Modernos) ---
  createClick = output<void>();
  editClick = output<T>();
  deleteClick = output<T>();

  // --- Queries (Signals) ---
  // Busca la referencia #tableHeader en el contenido proyectado
  tableHeaderTpl = contentChild<TemplateRef<void>>('tableHeader');
  
  // Busca la referencia #tableRow en el contenido proyectado
  tableRowTpl = contentChild<TemplateRef<{ $implicit: T }>>('tableRow');
  
  // actionsTpl = contentChild<TemplateRef<{ $implicit: T }>>('actions');

}
