import { Injectable, signal } from '@angular/core';
import { ConfirmOptions } from './confirm.model';

export interface ConfirmState {
  visible: boolean;
  message?: string;
  onConfirm?: () => void;
}

interface ConfirmInternal extends Required<ConfirmOptions> {
  id: number;
  resolve: (value: boolean) => void;
}

@Injectable({
  providedIn: 'root',
})
export class ConfirmService {
  
  private stack = signal<ConfirmInternal[]>([]);
  private idCounter = 0;
  // private _resolver?: (value: boolean) => void;

  // options = this._options.asReadonly();

  dialogs = this.stack.asReadonly();

  confirm(options: ConfirmOptions): Promise<boolean> {
    // this._options.set({
    //   severity: 'warn',
    //   acceptLabel: 'Aceptar',
    //   rejectLabel: 'Cancelar',
    //   ...options,
    // });

    return new Promise<boolean>((resolve) => {
      const dialog: ConfirmInternal = {
        id: ++this.idCounter,
        title: options.title ?? 'Confirmación',
        message: options.message,
        severity: options.severity ?? 'warn',
        acceptLabel: options.acceptLabel ?? 'Aceptar',
        rejectLabel: options.rejectLabel ?? 'Cancelar',
        resolve,
      };

      this.stack.update(stack => [...stack, dialog]);
    });
  }

  accept(id: number) {
    this.close(id, true);
  }

  reject(id: number) {
    this.close(id, false);
  }

  private close(id: number, result: boolean) {
    const dialog = this.stack().find(d => d.id === id);
    dialog?.resolve(result);
    this.stack.update(stack => stack.filter(d => d.id !== id));
  }
}
