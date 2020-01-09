import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthService } from './login/auth.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {appRoutes} from './routes';
import { Error404Component } from './common/404.component';
import { LoginComponent } from './login/login.component';
import {TOASTR_TOKEN, Toastr} from './common/toastr.service';
import {JQ_TOKEN} from './common/jQuery.service';
import {EmployeeListComponent} from './employee/employee-list.component';
import {EmployeeService} from './employee/employee.service';
import {EmplAddComponent} from './employee/employee-add.component';
//import {ToastrModule} from 'ngx-toastr';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

let toastr:Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    LoginComponent,
    EmployeeListComponent,
    EmplAddComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
    //,BrowserAnimationsModule,
    //ToastrModule.forRoot()
  ],
  providers: [
    AuthService,
    {provide: TOASTR_TOKEN, useValue: toastr},
    {provide: JQ_TOKEN, useValue: jQuery},
    EmployeeService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
