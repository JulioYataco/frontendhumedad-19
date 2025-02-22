import { Injectable } from '@angular/core';
import { BaseGenericoService } from '../base-generico.service';
import { ILotes } from 'src/app/core/models/ilotes';

@Injectable({
  providedIn: 'root'
})
export class LotesService extends BaseGenericoService<ILotes>{

  constructor() { 
    super();
    this.init('lotes');
  }
}
