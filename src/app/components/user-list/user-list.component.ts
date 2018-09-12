import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {Router} from '@angular/router';
import { UserListService } from '../../services/service-user-list/user-list.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  private userList: User[];
  private selectedUser : User;


  constructor(
    private userListService: UserListService,
    private router: Router
  ) { }

  onSelect(user: User) {
    this.selectedUser = user;
    this.router.navigate(['/viewUser', this.selectedUser.id]);
    console.log(this.selectedUser.id);
  }

  getUserList() {
    this.userListService.getUserList().subscribe(
      res => {
        console.log(res.json());
        this.userList = res.json();
        console.log(this.userList[0].id);
      },
      error => {
        console.log(error);
      }
      );
  }

  ngOnInit() {
    this.getUserList();


  }

}
