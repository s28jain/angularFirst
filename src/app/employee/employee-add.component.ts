import { Component, Inject } from '@angular/core';
import { IEmployee } from './employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';
import {TOASTR_TOKEN, Toastr} from '../common/toastr.service';


@Component({
    
   templateUrl: './employee-add.component.html'
     })

export class EmplAddComponent {
    title:string = 'Add Employee';

    constructor (private employeeService : EmployeeService, private router:Router,  @Inject(TOASTR_TOKEN) private toastr: Toastr ) {
  
      }
   
  
    employees : IEmployee[] = [ ]
    ngOnInit(): void {
  
      this.employees = this.employeeService.getAllEmployees();
  
    }
    save(formValues: any) {
      this.employeeService.newDatafromAdd (formValues.firstName , formValues.lastName, formValues.userName , formValues.password);
      this.router.navigate(['/employeeList']);

    } 

    cancel(){
      this.toastr.error("Cancel Was Clicked");
      this.router.navigate(['/employeeList']);
      console.log('cancel');
  }
  
} 