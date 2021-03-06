
import {LoginComponent} from './login/login.component'
import {Routes} from '@angular/router'
import { Error404Component } from './common/404.component';
import {EmployeeListComponent} from './employee/employee-list.component';
import { EmplAddComponent } from './employee/employee-add.component';
import {EmployeeIOComponent} from "./employee/employee-io.component";
import { EmployeeDetailsComponent } from './employee/employee-details.component';


export const appRoutes: Routes= [
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: '404', component:Error404Component },
    { path: 'login', component: LoginComponent},
    { path:'employeeList', component:EmployeeListComponent},
    {path:'addemployee', component: EmplAddComponent },
    {path: 'employeeIO', component:EmployeeIOComponent},
    { path:'employeeDetails', component:EmployeeDetailsComponent},

   // {path:'editemployee', component: EmplEditComponent }, //new comp





    { path: '**', component:Error404Component }

]