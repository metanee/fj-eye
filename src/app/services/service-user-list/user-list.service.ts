import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private http:Http) { }

  getUserList() {
  	let url = "http://localhost:8080/user/userList";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, {headers: headers});
  }
}

