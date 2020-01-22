import {Injectable} from '@angular/core'
import { IEmployee } from './employee.model';
import { Subject, Observable , throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {catchError, tap ,filter, map } from 'rxjs/operators';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Injectable ()
export class EmployeeService {
    employeeList: IEmployee[];
    current:IEmployee;
    id_n: number;
    private employeeUrl  = 'api/employee/employees.json';
    params = new HttpParams();
    
    constructor (private http: HttpClient){
        //this.employeeList = ELIST;
    }


    /*getAllEmployees(): IEmployee[] { 
        return this.employeeList;
    }*/
//
    getAllEmployees(): Observable<IEmployee[]> { 
        // return this.employeeList;   this was for hard coded employee list
        return this.http.get<IEmployee[]>(this.employeeUrl)
        .pipe (
            tap(data=> console.log ('All:  '+ JSON.stringify(data)))
            ,catchError(this.handleError)
            );
        }

        // needs some more code inside this method - not used now
     private handleError(err :HttpErrorResponse) {
        let errorMessage= '  ';
        console.log(errorMessage);
        return throwError(errorMessage);
    }
///
    
  /* 
   getHttp(employeeUrl: string) {
        return this.http.get<IEmployee[]>(employeeUrl);
    }
   getEmployees()Observable<IEmployee[]>{
        this.getHttp(this.employeeUrl).subscribe((data: IEmployee[]) =>{
            this.employeeList = data;
            console.log(data)} );

    }*/
    
   /* not working yet  
   getEmployees(): Observable <IEmployee[]> {
        let subject = new Subject <IEmployee[]> ();
        let data = this.http.get<IEmployee[]>(this.employeeUrl)
        .subscribe(emp => <IEmployee[]>emp);

        ()=> {subject.next(data); subject.complete();}; 
        return subject;
      }*/


    
    setCurrentEmployee (employee: IEmployee ) {
        this.current = {
            id: employee.id, 
            firstName: employee.firstName,
            lastName: employee.lastName,
            userName: employee.userName,
            password: employee.password,
            numberofYears : employee.numberofYears
          };
    }

    getCurrentEmployee () :IEmployee{
        return this.current;
    }

    newDatafromAdd (firstName:string , lastName:string, userName:string , password: string, numberofYears : number){
        this.id_n = this.employeeList.length+1; 
        this.addNewEmployee(this.id_n,firstName,lastName,userName, password, numberofYears );
        this.employeeList.push(this.current);
        
    }

    addNewEmployee (id:number,  firstName:string , lastName:string, userName:string , password: string, numberofYears:number ) {
        this.current = {
          id: id, 
          firstName: firstName,
          lastName: lastName,
          userName: userName,
          password: password,
          numberofYears : numberofYears
        };
    }
    
    //EDIT 
    updateCurrentEmployee(employee: IEmployee, firstName:string , lastName:string, userName:string , password: string, numberofYears : number): IEmployee {
        employee.firstName = firstName;
        employee.lastName = lastName;
        employee.userName = userName;
        employee.password = password;  
        employee.numberofYears = numberofYears;  
        return employee;
    }

    getEmployeeById(id:number):Observable<IEmployee[]>{
        this.getAllEmployees().subscribe(result => {
            this.employeeList = result.filter(data => id=== data.id)});
            
        console.log("getEmployeeById ");

        console.log(this.employeeList[0]);

        return //this.employeeList;
    
    }

    }
    /*const ELIST : IEmployee [] = 
    [
        {
            "id": 1,
            "firstName" : "Sakshi",
            "lastName" : "Jain",
            "userName" : "ejasaks",
            "password" : "pass123",
            "numberofYears" : 8
        
        },
        {
            "id": 2,
            "firstName" : "Tom",
            "lastName" : "Sawyer",
            "userName" : "tsawyer",
            "password" : "1234qwer",
            "numberofYears" : 9
    
        },
    
        {
            "id": 3,
            "firstName" : "Robin",
            "lastName" : "Hood",
            "userName" : "rhood",
            "password" : "1234qwer",
            "numberofYears" : 10
    
        }
    ]*/
