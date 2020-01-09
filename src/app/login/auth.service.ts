import {Injectable} from '@angular/core'
import {IEmployee} from '../employee/employee.model'


@Injectable()
export class AuthService {
  adminUser: IEmployee;

  constructor (){
    this.adminUser = {
      id: 0,
      firstName: 'Sakshi',
      lastName: 'Jain',
      userName: 'admin',
      password: 'admin'

    }
  }

  isAuthenticated(value){
    return (value.userName == this.adminUser.userName && value.password == this.adminUser.password);
  }
}
