import { Component, OnInit } from '@angular/core';
import {Params, ActivatedRoute, Router} from '@angular/router';
import {Company} from '../../models/company';
import {User} from '../../models/User';
import {LoginService} from '../../services/login.service';
import { GetUserByIdService } from '../../services/service-get-user-by-id/get-user-by-id.service';
import { CompanyService } from '../../services/service-company/company.service';
import {Employee} from '../../models/employee';


@Component({
  selector: 'app-user-by-id',
  templateUrl: './user-by-id.component.html',
  styleUrls: ['./user-by-id.component.css']
})
export class UserByIdComponent implements OnInit {
  private user: User = new User();
  private company: Company = new Company();
  private userId: number;
  private dataFetched = false;
  private defaultUserPaymentId: number;
  private loggedIn:boolean;
  private employee: Employee = new Employee();

  constructor(
    private getUserByIdService: GetUserByIdService,
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private loginService: LoginService,
    private router: Router
  ) { }

  getCurrentCompany() {
  	this.companyService.getCurrentCompany().subscribe(
  		res => {
        this.company = res.json();
        this.employee.companyId = this.company.id;
        //console.log(this.company.id);

  			this.dataFetched = true;
  		},
  		err => {
  			console.log(err);
  		}
  	);
  }

  onNewPayment() {
  	this.companyService.newPayment(this.employee).subscribe(
  		res => {
        this.getCurrentCompany();
        console.log(this.employee);
  		},
  		error => {
  			console.log(error.text());
  		}
  	);
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.userId = Number.parseInt(params['id']);
      //console.log(this.userId);

  	});
    this.getUserByIdService.getUser(this.userId).subscribe(
  		res => {
        this.user = res.json();
        this.employee.userId = this.user.id;
        console.log(this.user.id);
        console.log(this.user);
  		},
  		error => {
  			console.log(error);
  		}
    );

    this.loginService.checkSession().subscribe(
  		res => {
        this.loggedIn = true;
        //console.log(res);
  		},
  		error => {
  			this.loggedIn = false;
  			console.log("inactive session");
  			this.router.navigate(['/myAccount']);
  		}
  	);


    this.getCurrentCompany();

  }

}
