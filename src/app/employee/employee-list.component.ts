import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';



@Component({
  selector: 'emp-root',
  templateUrl: 'employee-list.component.html' 
})

export class EmployeeListComponent implements OnInit{
  title:string = 'Employee List';
  id: number;
  message:string;
  employeeList : IEmployee[] = [ ]
  errorMessage:string;
  employee :IEmployee ;

    constructor (private employeeService : EmployeeService, private router:Router ) {

    }
 
    ngOnInit(): void {
      this.employeeService.getAllEmployees().subscribe({
        next :employees=> this.employeeList=employees,
        error :err=>this.errorMessage=err
      });
    
    }
  
  /*ngOnInit(): void {
  this.employeeList = this.employeeService.getAllEmployees();
}*/

addEmployeePage(){
  console.log('Add New Employee Page');
  this.router.navigate(['/addemployee']);   
}

/*editEmployeePage(){
  console.log('Edit Existing Employee Page');
  this.router.navigate(['/editemployee']);   
}*/

onEmployeeSelected(id:number, message:string): void {

  console.log ('Employee  :' + id + ' Message :  ' + message);
    this.router.navigate(['/employeeDetails']);
   }

test() {
  
  console.log("Get Employee#1: " );
  console.log("FROM EMPLOYEE LIST :");
  //this.id = 1;
  //this.employeeService.getAllEmployees().subscribe(result => {
  //  console.log(result.filter(data => this.id=== data.id))});
  console.log (this.employeeService.getEmployeeById(this.id));
  
 // console.log(" employee id: " + this.employee.id);
  //console.log("Edit Employee #1: ");
  console.log(this.employeeService.updateCurrentEmployee(this.employee, 'b', 'b', 'b', 'b', 8));

 } 
  

}
