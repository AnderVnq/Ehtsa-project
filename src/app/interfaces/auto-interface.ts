import { ConductorInterface } from "./conductor-interface";

export interface AutoInterface {
    id:number,
    placa:string
    conductor:ConductorInterface,
    marca:string,
    modelo:string,
    date_fabricacion:Date,
    capacidad:string,
    kilometraje:string,
    estado:boolean
}
