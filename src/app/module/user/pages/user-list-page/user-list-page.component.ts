import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interface/user.interface';
import { UserService } from 'src/app/service/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.css']
})
export class UserListPageComponent implements OnInit {

  users: IUser[];

  constructor(
    private userSrv: UserService,
    private route: Router
  ) { }

  ngOnInit() {
    console.log('---> On init UserListPageComponent');
    this.loadData();
  }
  loadData(): any {
    console.log('----> load data', this.userSrv.users);
    this.users = this.userSrv.users;
  }

  onDeleteUser(userId: string) {
    this.userSrv.deleteById(userId);
  }

  onUpdateUser(userId: string) {
    this.route.navigate(['/user/update', userId]);
  }

}
