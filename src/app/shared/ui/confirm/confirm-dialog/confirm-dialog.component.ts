import { Component, inject } from '@angular/core';
import { ConfirmService } from '../confirm.service';
// import { ConfirmDialogModule } from 'primeng/confirmdialog';
// import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-confirm-dialog',
  imports: [],
  providers: [],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.scss',
})
export class ConfirmDialogComponent {
  confirm = inject(ConfirmService);
}
