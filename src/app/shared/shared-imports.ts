import { CardComponent } from 'src/app/theme/shared/components/card/card.component';
// src/app/shared/shared-imports.ts
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// PrimeNG
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
// import { CardComponent } from '../theme/shared/components/card/card.component';

export const SHARED_FORMULARIOS_IMPORTS = [
    CommonModule,         //Importa funciones basicas ngIf, ngFor, ngClass, etc.
    FormsModule,          //Habilita el uso de ngModel para hacer formularios basados en planillas
    ReactiveFormsModule,  //Para manejar formularios reactivos
    InputTextModule,      //Permite usar pinputText para mejorar la apariencia de los inputs
    ButtonModule,         //Permite usar pButton
    TableModule,          //Permite usar <p-table></p-table> para mostrar datos dinamicamente
    DialogModule,          //Permite usar <p-dialog></p-dialog>
    CardComponent,         //Permite usar <app-card></app-card>
    RippleModule
];
