import { Injectable } from '@angular/core';
import { BaseGenericoService } from '../base-generico.service';
import { IFundo } from 'src/app/core/models/ifundo';

@Injectable({
  providedIn: 'root'
})
export class FundosService extends BaseGenericoService<IFundo>{
  constructor(){
    super();
    this.init('fundos');
  }
  
}
