import { inject, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

export type ToastSeverity = 'success' | 'info' | 'warn' | 'error';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  
  private message = inject(MessageService);
  
  show(
    severity: ToastSeverity,
    summary: string,
    detail?: string,
  ){
    this.message.add({
      severity, 
      summary, 
      detail,
      life: 3000,
    });
  }

  success(summary: string, detail?: string){
    this.show('success', summary, detail);
  }

  error(summary: string, detail?: string){
    this.show('error', summary, detail);
  }

  warn(summary: string, detail?: string){ 
    this.show('warn', summary, detail);
  }

  info(summary: string, detail?: string){
    this.show('info', summary, detail);
  }
}
