import { Component, Inject } from '@angular/core'
import { Router } from '@angular/router';
import {TOASTR_TOKEN, Toastr} from './toastr.service'
@Component({
  templateUrl: './404.component.html',
  styles: [`
    .errorMessage { 
      margin-top:150px; 
      font-size: 170px;
      text-align: center; 
    }`]
})
export class Error404Component{
  constructor( private router:Router, @Inject(TOASTR_TOKEN) private toastr: Toastr ) {

  }

  backToLogin(){
    console.log('Back to Login');
    this.router.navigate(['/']);
    this.toastr.info("Back to Login");
  }

}
