import { Injectable } from '@angular/core';
import { AutoInterface } from '../interfaces/auto-interface';

@Injectable({
  providedIn: 'root'
})
export class AutoServService {




  private _autos: AutoInterface[] = [
    {
      id: 1,
      placa:'placa',
      conductor:
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
      marca: "Toyota",
      modelo: "Corolla",
      date_fabricacion: new Date("2018-05-15"),
      capacidad: "5 personas",
      kilometraje: "60000 km",
      estado: true
    },
    {
      id: 2,
      placa:'placa',
      conductor: 
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
      marca: "Honda",
      modelo: "Civic",
      date_fabricacion: new Date("2017-10-20"),
      capacidad: "4 personas",
      kilometraje: "45000 km",
      estado: true
    },
    {
      id: 3,
      placa:'placa',
      conductor: 
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
      marca: "Ford",
      modelo: "Focus",
      date_fabricacion: new Date("2019-03-10"),
      capacidad: "5 personas",
      kilometraje: "30000 km",
      estado: true
    },
    {
      id: 4,
      placa:'placa',
      conductor: 
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
      marca: "Chevrolet",
      modelo: "Spark",
      date_fabricacion: new Date("2016-12-05"),
      capacidad: "4 personas",
      kilometraje: "70000 km",
      estado: false
    },
    {
      id: 5,
      placa:'placa',
      conductor: 
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
      marca: "Nissan",
      modelo: "Sentra",
      date_fabricacion: new Date("2020-08-30"),
      capacidad: "5 personas",
      kilometraje: "20000 km",
      estado: true
    }
  ];


  get datos():AutoInterface[]{
    return [...this._autos]
  }


  data_by_id(id:number){
    return this._autos.find(item=>item.id===id)
  }



  constructor() { }
}
