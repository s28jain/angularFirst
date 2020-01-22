import {Component, Input, Output, EventEmitter} from '@angular/core'
import { IEmployee } from './employee.model';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'employee-io',
    template: `     
  <div (click)= "handleClickMe()">
  {{employee.firstName}}
    </div>

       
    `
})

export class EmployeeIOComponent{
    constructor (private employeeService : EmployeeService){

    }
    @Input() employee: IEmployee
    @Output() eventClick = new EventEmitter()

    handleClickMe() {
        console.log('CLICKED')

       this.eventClick.emit(this.employee);

       this.employeeService.setCurrentEmployee(this.employee);
}
   
}