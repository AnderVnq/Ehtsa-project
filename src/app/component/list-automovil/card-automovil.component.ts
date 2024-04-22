import { Component } from '@angular/core';
import { ConductorServService } from '../../services/conductor-serv.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-automovil',
  standalone: true,
  imports: [],
  templateUrl: './card-automovil.component.html',
  styles: ``
})
export class CardAutomovilComponent {
  id!:number
  data:any

  
  constructor(private dataService:ConductorServService,private route: ActivatedRoute){
    
    this.id = parseInt(this.route.snapshot.paramMap.get('id') ?? '');
    this.data = this.dataService.get_data_id(this.id);
    console.log(this.data);
  }

  
  
  
}
