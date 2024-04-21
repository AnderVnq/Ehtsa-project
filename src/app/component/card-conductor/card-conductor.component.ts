import { Component, Input, SimpleChanges} from '@angular/core';
import {ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ConductorInterface } from '../../interfaces/conductor-interface';
import { ConductorServService } from '../../services/conductor-serv.service'

@Component({
  selector: 'app-card-conductor',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './card-conductor.component.html',
  styles: ``
})
export class CardConductorComponent {
  displayedColumns: string[] = ['id', 'nombre', 'licencia', 'tipo_licencia'];
  dataSource=new MatTableDataSource<ConductorInterface>(this.datos)


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  get datos(){
    return this.datos_services.datos
  }

  constructor(
    private datos_services:ConductorServService
  ){}

}






 