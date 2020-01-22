import { Component, Inject, Input,OnInit } from '@angular/core';

import { IEmployee } from './employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';
import {TOASTR_TOKEN, Toastr} from '../common/toastr.service';


@Component({
  // selector:  'emp-details',
  templateUrl: 'employee-details.component.html' 

 
})

export class EmployeeDetailsComponent implements OnInit {
  // @Input() selectedEmployeeId : number;
 
  title:string = 'Employee Details';
  message:string;
  
  employeeList : IEmployee[] = [ ];
  employee :IEmployee ;
  errorMessage:string;

constructor (private employeeService : EmployeeService, private router:Router,  @Inject(TOASTR_TOKEN) private toastr: Toastr  ) {

}

ngOnInit(): void {
    //this.employeeList = this.employeeService.getAllEmployees();
    console.log("IN DETAILS ")
    this.employeeService.getAllEmployees().subscribe({
      next :employees=> this.employeeList=employees,
      error :err=>this.errorMessage=err
    });
    
    /*this.employeeService.getEmployeeById(1).subscribe(result => {
      result.filter(data => 1 === data.id)
      console.log(result)});*/

      this.employee = this.employeeService.getCurrentEmployee();
 
  }
  
  // showEmployeeDetails() {
 
  // console.log("Get Employee: " );
  // console.log( this.employeeService.getEmployeeById(this.employeeList,  2));
   
  // } 


   editThisEmployee() {
  
    console.log("Get Employee#1: " );
   /* console.log( this.employeeService.getEmployeeById(1).subscribe(res => {
      if (res.success) this.employee = res.data;
    }));
    console.log(this.employee.id);
    
    console.log("Edit Employee #1: ");
    console.log(this.employeeService.updateCurrentEmployee( this.employee, 'b', 'b', 'b', 'b', 2));
  */
   } 

   goToEmployeeListPage() {
    this.toastr.error("Employee List Was Clicked");
    this.router.navigate(['/employeeList']);
    console.log('Employee List Page');

  }

  onEmployeeSelected(id:number, message:string): void {

    console.log ('Employee  :' + id + ' Message :  ' + message);
    this.router.navigate(['/employeeDetails']);
     }
  





}