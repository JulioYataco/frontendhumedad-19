import { inject, Injectable } from "@angular/core";
import { ITipoSuelos } from "../models/itipo-suelos";
import { TiposSuelosService } from "../services/tipos-suelos.service";
// import { finalize, Observable, tap } from "rxjs";
import { BaseCrudStore } from "src/app/shared/ui/state/base-crud-store";

@Injectable({ providedIn: 'root' })
export class TiposSuelosStore extends BaseCrudStore<ITipoSuelos> {
    protected service = inject(TiposSuelosService);
}

    // //estado
    // private _items = signal<ITipoSuelos[]>([]);
    // private _loading = signal(false);
    // private _error  = signal<string | null>(null);

    // //estado público (solo lectura)
    // items = computed(() => this._items());
    // loading = computed(() => this._loading());
    // error = computed(() => this._error());

    // load(): Observable<ITipoSuelos[]> {
    //     this._loading.set(true);

    //     return this.service.list().pipe(
    //         tap(data => this._items.set(data)),
    //         finalize(() => this._loading.set(false))
    //     );
    // }

    // create(data: Partial<ITipoSuelos>): Observable<ITipoSuelos> { 
    //     this._loading.set(true);

    //     return this.service.create(data).pipe(
    //         tap(newItem => {
    //             this._items.update(items => [...items, newItem]);
    //         }),
    //         finalize(() => this._loading.set(false))
    //     );
    // }
    
    // update(id: number, data: Partial<ITipoSuelos>) {
    //     this._loading.set(true);

    //     return this.service.update(id, data).pipe(
    //         tap(updatedItem => {
    //             this._items.update(items => 
    //                 items.map(i => i.id === id ? updatedItem : i)
    //             );
    //         }),
    //         finalize(() => this._loading.set(false))
    //     )
        
    // }

    // delete(id: number) {
    //     this._loading.set(true);

    //     return this.service.delete(id).pipe(
    //         tap(() => {
    //             this._items.update(items => 
    //                 items.filter(i => i.id !== id)
    //             );
    //         }),
    //         finalize(() => this._loading.set(false))
    //     );
    // }


