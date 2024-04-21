import { Injectable } from '@angular/core';
import {ConductorInterface} from'../interfaces/conductor-interface'
@Injectable({
  providedIn: 'root'
})
export class ConductorServService {


  private _datos:ConductorInterface[] = [
    { id: 1, nombre: "anderson", licencia: "123456", tipo_licencia: "categoria B" },
    { id: 2, nombre: "anderson", licencia: "123456", tipo_licencia: "categoria B" },
    { id: 3, nombre: "anderson", licencia: "123456", tipo_licencia: "categoria B" },
    { id: 4, nombre: "anderson", licencia: "123456", tipo_licencia: "categoria B" },
    { id: 5, nombre: "anderson", licencia: "123456", tipo_licencia: "categoria B" },
    { id: 6, nombre: "anderson", licencia: "123456", tipo_licencia: "categoria B" },
    { id: 7, nombre: "anderson", licencia: "123456", tipo_licencia: "categoria B" },
    { id: 8, nombre: "anderson", licencia: "123456", tipo_licencia: "categoria B" },
    { id: 9, nombre: "anderson", licencia: "123456", tipo_licencia: "categoria B" },
    { id: 10, nombre: "anderson", licencia: "123456", tipo_licencia: "categoria B" },
    { id: 11, nombre: "anderson", licencia: "123456", tipo_licencia: "categoria B" },
    { id: 12, nombre: "anderson", licencia: "123456", tipo_licencia: "categoria B" },
    { id: 13, nombre: "anderson", licencia: "123456", tipo_licencia: "categoria B" },
    { id: 14, nombre: "anderson", licencia: "123456", tipo_licencia: "categoria B" },
    { id: 15, nombre: "anderson", licencia: "123456", tipo_licencia: "categoria B" },
    { id: 16, nombre: "anderson", licencia: "123456", tipo_licencia: "categoria B" },
    { id: 17, nombre: "anderson", licencia: "123456", tipo_licencia: "categoria B" },
    { id: 18, nombre: "anderson", licencia: "123456", tipo_licencia: "categoria B" },
    { id: 19, nombre: "anderson", licencia: "123456", tipo_licencia: "categoria B" },
    { id: 20, nombre: "anderson", licencia: "123456", tipo_licencia: "categoria B" },
    { id: 21, nombre: "anderson", licencia: "123456", tipo_licencia: "categoria B" },
    { id: 22, nombre: "anderson", licencia: "123456", tipo_licencia: "categoria B" },
    { id: 23, nombre: "anderson", licencia: "123456", tipo_licencia: "categoria B" },
    { id: 24, nombre: "anderson", licencia: "123456", tipo_licencia: "categoria B" },
    { id: 25, nombre: "anderson", licencia: "123456", tipo_licencia: "categoria B" },
    { id: 26, nombre: "anderson", licencia: "123456", tipo_licencia: "categoria B" },
    { id: 27, nombre: "anderson", licencia: "123456", tipo_licencia: "categoria B" },
    { id: 28, nombre: "anderson", licencia: "123456", tipo_licencia: "categoria B" },
    { id: 29, nombre: "anderson", licencia: "123456", tipo_licencia: "categoria B" },
    { id: 30, nombre: "anderson", licencia: "123456", tipo_licencia: "categoria B" }
  ];
  

  get datos(){
    return [...this._datos]
  }

  set datos(value){
    
  }

  constructor() { }
}
