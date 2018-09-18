import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Employee} from '../../models/employee';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http:Http) { }


  getCurrentCompany() {
    let url = "http://localhost:8080/company/getCurrentCompany";

    let tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, {headers : tokenHeader});
  }

  newPayment(employee: Employee) {
  	let url = "http://localhost:8080/employee/add";

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.post(url, JSON.stringify(employee), {headers: tokenHeader});
  }

}
