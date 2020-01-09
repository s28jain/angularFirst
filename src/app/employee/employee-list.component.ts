import { Component } from '@angular/core';
import { IEmployee } from './employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';



@Component({
  selector: 'emp-root',
  templateUrl: 'employee-list.component.html' 
})

export class EmployeeListComponent {
  title:string = 'Employee';

    constructor (private employeeService : EmployeeService, private router:Router ) {

    }
 
 
  employeeList : IEmployee[] = [ ];
  
  ngOnInit(): void {
  this.employeeList = this.employeeService.getAllEmployees();
}

addEmployeePage(){
  console.log('Add New Employee Page');
  this.router.navigate(['/addemployee']);   
}

/*editEmployeePage(){
  console.log('Edit Existing Employee Page');
  this.router.navigate(['/editemployee']);   
}*/


test() {

  console.log("Get Employee#1: " );
  console.log( this.employeeService.getEmployeeById(this.employeeList, 1));
  console.log("Edit Employee #1: ");
  console.log(this.employeeService.updateCurrentEmployee(this.employeeService.getEmployeeById(this.employeeList, 1), 'b', 'b', 'b', 'b'));

 } 
  

}
