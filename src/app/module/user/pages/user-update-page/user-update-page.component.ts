import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user/user.service';
import { IUser } from 'src/app/interface/user.interface';

@Component({
  selector: 'app-user-update-page',
  templateUrl: './user-update-page.component.html',
  styleUrls: ['./user-update-page.component.css']
})
export class UserUpdatePageComponent implements OnInit {

  userId: string;
  userToUpdate: IUser;

  constructor(
    private route: ActivatedRoute,
    private userSrv: UserService
  ) {
    this.userId = this.route.snapshot.params.id;
  }

  ngOnInit() {
    this.loadData();
  }
  loadData(): any {
    this.userToUpdate = this.userSrv.getById(this.userId);
  }

  onUpdateUser(user: IUser) {
    console.log('---> onUpdateUser', user);
    this.userSrv.updateById(this.userId, user);
  }

}
