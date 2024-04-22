import { Injectable } from '@angular/core';
import {ConductorInterface} from'../interfaces/conductor-interface'
@Injectable({
  providedIn: 'root'
})
export class ConductorServService {


  private _datos:ConductorInterface[] = [
    {
      id: 1,
      nombre: 'Juan',
      apellido: 'Pérez',
      dni: '123456789',
      licencia: 'ABC123',
      tipo_licencia: 'A',
      telefono: '555-1234',
      direccion: 'Calle Principal 123',
      fechacontratacion: new Date('2022-01-15')
    },
    {
      id: 2,
      nombre: 'María',
      apellido: 'González',
      dni: '987654321',
      licencia: 'DEF456',
      tipo_licencia: 'B',
      telefono: '555-5678',
      direccion: 'Avenida Central 456',
      fechacontratacion: new Date('2021-12-01')
    },
    {
      id: 3,
      nombre: 'Carlos',
      apellido: 'López',
      dni: '456789123',
      licencia: 'GHI789',
      tipo_licencia: 'C',
      telefono: '555-9012',
      direccion: 'Plaza Mayor 789',
      fechacontratacion: new Date('2021-11-20')
    },
    {
      id: 4,
      nombre: 'Laura',
      apellido: 'Martínez',
      dni: '321987654',
      licencia: 'JKL012',
      tipo_licencia: 'A',
      telefono: '555-3456',
      direccion: 'Calle Secundaria 456',
      fechacontratacion: new Date('2022-02-10')
    },
    {
      id: 5,
      nombre: 'Pedro',
      apellido: 'Rodríguez',
      dni: '654321987',
      licencia: 'MNO345',
      tipo_licencia: 'B',
      telefono: '555-6789',
      direccion: 'Avenida Principal 789',
      fechacontratacion: new Date('2022-03-05')
    },
    {
      id: 6,
      nombre: 'Ana',
      apellido: 'Hernández',
      dni: '987123456',
      licencia: 'PQR678',
      tipo_licencia: 'C',
      telefono: '555-8901',
      direccion: 'Paseo del Sol 321',
      fechacontratacion: new Date('2021-10-25')
    },
    {
      id: 7,
      nombre: 'David',
      apellido: 'López',
      dni: '456789321',
      licencia: 'STU901',
      tipo_licencia: 'A',
      telefono: '555-2345',
      direccion: 'Avenida del Norte 678',
      fechacontratacion: new Date('2021-09-15')
    },
    {
      id: 8,
      nombre: 'Elena',
      apellido: 'García',
      dni: '789654321',
      licencia: 'VWX234',
      tipo_licencia: 'B',
      telefono: '555-5678',
      direccion: 'Calle del Río 123',
      fechacontratacion: new Date('2022-04-20')
    },
    {
      id: 9,
      nombre: 'José',
      apellido: 'Ruiz',
      dni: '321789654',
      licencia: 'YZA567',
      tipo_licencia: 'C',
      telefono: '555-8901',
      direccion: 'Calle Mayor 789',
      fechacontratacion: new Date('2022-05-10')
    },
    {
      id: 10,
      nombre: 'Marina',
      apellido: 'Fernández',
      dni: '654123789',
      licencia: 'BCD890',
      tipo_licencia: 'A',
      telefono: '555-2345',
      direccion: 'Avenida del Sur 456',
      fechacontratacion: new Date('2021-08-01')
    },
    {
      id: 11,
      nombre: 'Mario',
      apellido: 'Díaz',
      dni: '987654123',
      licencia: 'EFG901',
      tipo_licencia: 'B',
      telefono: '555-5678',
      direccion: 'Paseo de la Luna 789',
      fechacontratacion: new Date('2021-07-12')
    },
    {
      id: 12,
      nombre: 'Sara',
      apellido: 'Alvarez',
      dni: '321456987',
      licencia: 'HIJ012',
      tipo_licencia: 'C',
      telefono: '555-8901',
      direccion: 'Calle del Parque 123',
      fechacontratacion: new Date('2022-06-18')
    },
  ];
  

  get datos(){
    return [...this._datos]
  }

  set datos(value){
    
  }


  get_data_id(id:number){

    return this._datos.find(item=>item.id===id)
  }

  constructor() { }
}
