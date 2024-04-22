import { Component, Input} from '@angular/core';
import {ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ConductorInterface } from '../../interfaces/conductor-interface';
import { ConductorServService } from '../../services/conductor-serv.service'
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-conductor',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule,MatIconModule,RouterLink,MatLabel ,MatFormField,FormsModule],
  templateUrl: './card-conductor.component.html',
  styles: ``
})
export class CardConductorComponent {
  displayedColumns: string[] = ['id','dni' ,'nombre', 'licencia', 'tipo_licencia','actions'];
  dataSource=new MatTableDataSource<ConductorInterface>(this.datos)
  filterdata!:string

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  get datos(){
    return this.datos_services.datos
  }
  
  constructor(
    private datos_services:ConductorServService,
    private router: Router
  ){}

  applyFilter() {
    const filterValue = this.filterdata;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.filterdata)
    this.filterdata=''
  }

  ver_detalle(data:any){
    console.log(data)


    this.router.navigate(['/dashboard/detalle/conductor',data.id])
  }

  editar_conductor(data:any){
    this.router.navigate(['/dashboard/conductor/update',data.id])
  }
}






 