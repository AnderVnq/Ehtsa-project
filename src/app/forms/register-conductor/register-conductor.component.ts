import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatLabel,MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import {MatInput} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-conductor',
  standalone: true,
  imports: [MatFormField,MatLabel,MatIcon,MatInput,ReactiveFormsModule,MatCardModule,MatDatepickerModule,MatFormFieldModule],
  templateUrl: './register-conductor.component.html',
  styles: `
  `
})
export class RegisterConductorComponent {
  private readonly _formBuilder=inject(FormBuilder)
  private readonly _router= inject(Router)
  // formGroup=new FormGroup({
  //   nombre:new FormControl('',{validators:Validators.required}),
  //   apellido:new FormControl('',{validators:Validators.required}),
  //   dni:new FormControl('',{validators:Validators.required}),
  //   licencia:new FormControl('',{validators:Validators.required}),
  //   tipo_licencia:new FormControl('',{validators:Validators.required}),
  //   telefono:new FormControl('',{validators:Validators.required}),
  //   direccion:new FormControl('',{validators:Validators.required}),
  //   fecha_contratacion:new FormControl('',{validators:Validators.required})
  // })

  formGroup=this._formBuilder.nonNullable.group({
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      dni:['',Validators.required],
      licencia:['',Validators.required],
      tipo_licencia:['',Validators.required],
      telefono:['',Validators.required],
      direccion:['',Validators.required],
      fecha_contratacion:['',Validators.required]
  })


  click_register():void{
    console.log(this.formGroup.valid)
    if(this.formGroup.valid===true){
      console.log(this.formGroup.value)
    }
    else{
      console.log("error")
    }

    const asd=this.formGroup.hasError('required')
    console.log(asd)
    this._router.navigate(['/dashboard']);
  }
}
