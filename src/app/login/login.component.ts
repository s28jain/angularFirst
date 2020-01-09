import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import {TOASTR_TOKEN, Toastr} from '../common/toastr.service';
//import {ToastrService} from 'ngx-toastr';

@Component({
  templateUrl: './login.component.html',
  styles: [`
  em {float:right; color:red; padding-left:10px;}
  `]
})
export class LoginComponent {

    constructor(private authService:AuthService, private router:Router, @Inject(TOASTR_TOKEN) private toastr: Toastr ){// private toastr:ToastrService

    }
   
    
    login (value){
        console.log(value);
        if (this.authService.isAuthenticated(value)){
            console.log("authenticated");
            this.toastr.success("Welcome " + value.userName);
            this.router.navigate(['/employeeList']);
        }else{
            this.toastr.warning("Login Failed - Please enter correct Admin Credentials ");
        }

    }

    info() {
        console.log('info');
        this.toastr.info("INFO: Please enter the Admin User and Password ");
    }

    cancel(){
        console.log('cancel');
        this.toastr.error("Cancel Was Clicked");
        this.router.navigate(['/404']);
    }
}
