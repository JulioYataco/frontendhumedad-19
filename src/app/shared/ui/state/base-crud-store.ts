import { computed, signal } from "@angular/core";
import { catchError, finalize, Observable, tap, throwError } from "rxjs";
import { BaseGenericoService } from "src/app/core/http/base-generico.service";

export abstract class BaseCrudStore<T extends { id: number}> {

    protected abstract service: BaseGenericoService<T>;

    //Store
    protected _items = signal<T[]>([]);
    protected _loading = signal(false);
    protected _error  = signal<string | null>(null);

    //estado público (solo lectura)
    items = computed(() => this._items());
    loading = computed(() => this._loading());
    error = computed(() => this._error());

    //Acciones CRUD
    load(): Observable<T[]> {
        this._loading.set(true);

        return this.service.list().pipe(
            tap(data => this._items.set(data)),
            catchError(err => this.handleError(err)),
            finalize(() => this._loading.set(false))
        );
    }

    create(data: Partial<T>): Observable<T> { 
        this._loading.set(true); 

        return this.service.create(data).pipe(
            tap(newItem => {
                this._items.update(items => [...items, newItem]);
            }),
            catchError(err => this.handleError(err)),
            finalize(() => this._loading.set(false))
        );  
    }

    update(id: number, data: Partial<T>): Observable<T> {
        this._loading.set(true);
        // this._error.set(null);

        return this.service.update(id, data).pipe(
            tap(updatedItem => {
                this._items.update(items => 
                    items.map(i => i.id === id ? updatedItem : i)
                );
            }),
            catchError(err => this.handleError(err)),
            finalize(() => this._loading.set(false))
        )   
    }

    delete(id: number): Observable<void> {
        this._loading.set(true);
        // this._error.set(null);

        return this.service.delete(id).pipe(
            tap(() => {
                this._items.update(items => items.filter(item => item.id !== id));
            }),
            catchError(err => this.handleError(err)),
            finalize(() => this._loading.set(false))
        );
    }

    // CENTRALIZADO DE ERROR
    protected handleError(error: any) {
        const message =
            error?.error?.message ??
            error?.message ??
            'Error inesperado.';

        this._error.set(message);
        return throwError(() => error);
    }
}