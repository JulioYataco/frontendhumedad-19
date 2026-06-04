// angular import
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpinnerComponent } from './theme/shared/components/spinner/spinner.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { ConfirmDialogComponent } from './shared/ui/confirm/confirm-dialog/confirm-dialog.component';
import { ToastModule } from 'primeng/toast';
// import { ConfirmationService } from 'primeng/api';
// import { ConfirmDialogComponent } from './shared/ui/confirm/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [
  //   ConfirmationService // <--- 3. NECESARIO PARA QUE FUNCIONE LA LÓGICA
  // ],
  imports: [
    RouterOutlet, 
    SpinnerComponent, 
    NgxEchartsModule, 
    ConfirmDialogComponent,
    ToastModule,
    SpinnerComponent
  ]
})
export class AppComponent {
  // public props
  title = 'mantis-free-version';
}
