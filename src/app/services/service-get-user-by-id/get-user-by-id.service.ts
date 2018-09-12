import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GetUserByIdService {

  constructor(private http: Http) { }

   getUser(id:number) {
  	let url = "http://localhost:8080/user/"+id;
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, {headers: headers});
  }
}
