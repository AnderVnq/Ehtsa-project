import { Component, inject } from '@angular/core';
import { ConductorServService } from '../../services/conductor-serv.service';
import { ActivatedRoute } from '@angular/router';
import { AutoServService } from '../../services/auto-serv.service';
import { AutoInterface } from '../../interfaces/auto-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-automovil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-automovil.component.html',
  styles: ``
})
export class CardAutomovilComponent {

  private readonly _autoService=inject(AutoServService)
  data?:AutoInterface = this._autoService.data_by_id(1)
  
  
  
}
