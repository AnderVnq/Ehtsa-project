import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatLabel,MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import {MatInput} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ConductorServService } from '../../services/conductor-serv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable,of } from 'rxjs';
import { ConductorInterface } from '../../interfaces/conductor-interface';

@Component({
  selector: 'app-update-conductor',
  standalone: true,
  imports: [
    MatFormField,MatLabel,
    MatIcon,MatInput,ReactiveFormsModule,
    MatCardModule,MatDatepickerModule,
    MatFormFieldModule
  ],
  templateUrl: './update-conductor.component.html',
  styles: ``
})
export class UpdateConductorComponent {
  private readonly _formBuilder=inject(FormBuilder)
  private readonly _conductorService=inject(ConductorServService)
  id=parseInt(this.route.snapshot.paramMap.get('id') ?? '');
  data=this._conductorService.get_data_id(this.id)
  asd=this.id
  constructor(
    private route:ActivatedRoute,
    private router: Router
  ){
    console.log(this.asd)
    console.log(this.data)
  }


  //aplicar validaciones para actualizar solo pon , Validator y el validator custom que haas
  formGroup=this._formBuilder.nonNullable.group({
    nombre:[this.data?.nombre],
    apellido:[this.data?.apellido],
    dni:[this.data?.dni],
    licencia:[this.data?.licencia],
    tipo_licencia:[this.data?.tipo_licencia],
    telefono:[this.data?.telefono],
    direccion:[this.data?.direccion],
    fecha_contratacion:[this.data?.fechacontratacion ? this.data.fechacontratacion.toISOString().substring(0, 10) : null,]
  })
  click_redirect():void{
    console.log(this.formGroup.valid);

    // if (this.formGroup.valid) {
    //   console.log(this.formGroup.value);
    // } else {
    //   console.log("Error en el formulario");
    // }
  
    // // Acceder a los errores de validación de un campo específico (por ejemplo, 'nombre')
    // const errors = this.formGroup.controls.nombre.hasError('nombre');
    // console.log(errors);
  
    // Navegar a la ruta 'dashboard' después de procesar el formulario
    this.router.navigate(['/dashboard']);
  }

  
}
