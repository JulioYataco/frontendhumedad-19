import { inject, signal } from "@angular/core";
import { ConfirmService } from "../confirm/confirm.service";
import { ToastService } from "../toast/toast.service";

export abstract class BaseCrudPage<T extends {id:number}> {

    protected confirm = inject(ConfirmService);
    protected toast = inject(ToastService);

    selectItem = signal<T | null>(null);
    showForm = signal(false);

    protected openCreate() {
        this.selectItem.set(null);
        this.showForm.set(true);
    }

    protected openEdit(item: T) {
        this.selectItem.set(item);
        this.showForm.set(true);
    }

    protected closeForm() {
        this.showForm.set(false);
    }

    protected async confirmDelete(
        item: T, 
        deleteFn: (id: number) => void,
        label: string
    ) {
        const ok = await this.confirm.confirm({
            title: `Eliminar ${label}`,
            message: `¿Eliminar "${label}" seleccionado?`,
            severity: 'danger',
            acceptLabel: 'Eliminar',
        });

        if (!ok) return;

        deleteFn(item.id);
    }
}