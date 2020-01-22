import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEmployee } from './employee.model';



@Component({
  selector: 'emp-years',
  template: `
     
  <div (click)= "onClick()">
  {{years}}

</div>
`
   
})

export class NumberOfYears  {
title :string = 'Years Component';


@Input() years : number;

@Output() employeeSelected :EventEmitter<string> =
new EventEmitter<string>();

onClick(): void {

  console.log ('Year field is  clicked');
  this.employeeSelected.emit ('message from child to parent component'); 
  

}
}
