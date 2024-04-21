import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styles:``
})
export class LoginComponent {

  constructor(private router: Router) { }


  login(){
    this.router.navigate(['/dashboard'])
  }
}
