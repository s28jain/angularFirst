import {Injectable} from '@angular/core'
import { IEmployee } from './employee.model';


@Injectable ()
export class EmployeeService {
    employeeList: IEmployee[];
    current:IEmployee;
    id_n: number;
    
    constructor (){
        this.employeeList = ELIST;
    }


    getAllEmployees(): IEmployee[] { 
        return this.employeeList;
    }

    //ADD
    newIdFromList (empList: IEmployee[]) {
        this.employeeList = empList
        this.id_n = this.employeeList.length+1; 
    }

    newDatafromAdd (firstName:string , lastName:string, userName:string , password: string){
        this.id_n = this.employeeList.length+1; 
        this.addNewEmployee(this.id_n,firstName,lastName,userName, password );
        //console.log(this.employeeList);
        //console.log(this.id_n);
        this.employeeList.push(this.current);

    }

    addNewEmployee (id:number,  firstName:string , lastName:string, userName:string , password: string) {
        this.current = {
          id: id, 
          firstName: firstName,
          lastName: lastName,
          userName: userName,
          password: password
        };
    }
    
    //EDIT 
    updateCurrentEmployee(employee: IEmployee, firstName:string , lastName:string, userName:string , password: string): IEmployee {
        employee.firstName = firstName;
        employee.lastName = lastName;
        employee.userName = userName;
        employee.password = password;    
        return employee;
    }

    getEmployeeById(employeeList: IEmployee[], id:number): IEmployee {
        return employeeList.find(emp => emp.id === id);
    }

    }
    const ELIST : IEmployee [] = 
    [
        {
            "id": 1,
            "firstName" : "Erhan",
            "lastName" : "Yenigun",
            "userName" : "eyenigun",
            "password" : "qwer1234"
        
        },
        {
            "id": 2,
            "firstName" : "Tom",
            "lastName" : "Sawyer",
            "userName" : "tsawyer",
            "password" : "1234qwer"
    
        },
    
        {
            "id": 3,
            "firstName" : "Robin",
            "lastName" : "Hood",
            "userName" : "rhood",
            "password" : "1234qwer"
    
        }
    ]
