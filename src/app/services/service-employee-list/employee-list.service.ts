import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {

  constructor(private http:Http) { }


  getEmployeeList() {
  	let url = "http://localhost:8080/employee/getEmployeeList";

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.get(url,  {headers: tokenHeader});
  }
}
