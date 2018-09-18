import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/service-company/company.service';
import {EmployeeListService} from '../../services/service-employee-list/employee-list.service';
import {Company} from '../../models/company';
import {Employee} from '../../models/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  private company: Company = new Company();
  private employee: Employee = new Employee();
  private employeeList: Employee [] = [] ;
  constructor(
    private companyService: CompanyService,
    private employeeListService: EmployeeListService
    ) { }



  getCurrentCompany() {
  	this.companyService.getCurrentCompany().subscribe(
  		res => {
        this.company = res.json();
        //this.employee.companyId = this.company.id;
        console.log(this.company);

  			//this.dataFetched = true;
  		},
  		err => {
  			console.log(err);
  		}
  	);
  }

  getEmployeeList() {
  	this.employeeListService.getEmployeeList().subscribe(
  		res => {
        this.company.employeeList = res.json();
        this.employeeList = this.company.employeeList;
        //this.employee.companyId = this.company.id;
        console.log(this.employeeList);

  			//this.dataFetched = true;
  		},
  		err => {
  			console.log(err);
  		}
  	);
  }


  ngOnInit() {

    this.getCurrentCompany();
    this.getEmployeeList();
  }

}
