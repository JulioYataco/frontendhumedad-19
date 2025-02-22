import { Injectable } from '@angular/core';
import { BaseGenericoService } from '../base-generico.service';
import { ISublotes } from 'src/app/core/models/isublotes';

@Injectable({
  providedIn: 'root'
})
export class SublotesService extends BaseGenericoService<ISublotes> {

  constructor() { 
    super();
    this.init('sublotes');
  }
}
