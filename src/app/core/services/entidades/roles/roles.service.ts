import { Injectable } from '@angular/core';
import { BaseGenericoService } from '../base-generico.service';
import { IRoles } from 'src/app/core/models/iroles';

@Injectable({
  providedIn: 'root'
})
export class RolesService extends BaseGenericoService<IRoles>{

  constructor() { 
    super();
    this.init('roles');
  }
}
