import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import { UserListService } from '../../services/service-user-list/user-list.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'email', 'firstName', 'lastName'];
  private userList: User[];

  constructor(
    private userListService: UserListService,
  ) { }

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
