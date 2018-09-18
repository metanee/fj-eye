import {Employee} from '../models/employee';


export class Company {
  public id: number;
  public firstName: string;
  public lastName: string;
  public username: string;
  public password: string;
  public email: string;
  public phone: string;
  public enabled: boolean;
  public employeeList: Employee[];

  /*public authorities : [{
  authority: [0].authority;
  }];*/
}
