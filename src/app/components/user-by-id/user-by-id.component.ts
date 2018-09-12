import { Component, OnInit } from '@angular/core';
import {Params, ActivatedRoute, Router} from '@angular/router';
import {User} from '../../models/user';
import { GetUserByIdService } from '../../services/service-get-user-by-id/get-user-by-id.service';


@Component({
  selector: 'app-user-by-id',
  templateUrl: './user-by-id.component.html',
  styleUrls: ['./user-by-id.component.css']
})
export class UserByIdComponent implements OnInit {
  private user: User; //= new User();
  private userId: number;

  constructor(
    private getUserByIdService: GetUserByIdService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.userId = Number.parseInt(params['id']);
      //console.log(this.userId);
  	});
    this.getUserByIdService.getUser(this.userId).subscribe(
  		res => {
        this.user = res.json();
        console.log(this.user);
  		},
  		error => {
  			console.log(error);
  		}
  	);
  }

}
