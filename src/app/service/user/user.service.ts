import { Injectable } from '@angular/core';
import { IUser } from 'src/app/interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: IUser[] = [{
    firstname: 'stephane',
    lastname: 'nimer',
    email: 'stephane.nimer@hotmail.fr',
    password: 'test',
    id: '1108e73f-c5ed-6550-9b9a-3f2ae15dc864'
  },
  {
    firstname: 'stephane2',
    lastname: 'nimer2',
    email: 'stephane.nimer2@hotmail.fr',
    password: 'test2',
    id: '1108e73f-c5ed-6550-9b9a-3f2ae15dc865'
  },
  {
    firstname: 'stephane3',
    lastname: 'nimer3',
    email: 'stephane.nimer3@hotmail.fr',
    password: 'test3',
    id: '1108e73f-c5ed-6550-9b9a-3f2ae15dc866'
  }];

  constructor() { }

  deleteById(userId) {
    const indexUser = this.users.findIndex(({ id }) => id == userId);
    if (indexUser !== -1) {
      this.users.splice(indexUser, 1);
    }

    if (indexUser == -1) {
      console.error('User to delete not found');
    }

  }

  getById(userId: string) {
    const indexUser = this.users.findIndex(({ id }) => id == userId);
    if (indexUser !== -1) {
      return this.users[indexUser];
    }

    if (indexUser == -1) {
      console.error('User to delete not found');
    }
  }

  updateById(userId, newUser: IUser) {
    const indexUser = this.users.findIndex(({ id }) => id == userId);
    if (indexUser !== -1) {


      this.users[indexUser] = {
        ...this.users[indexUser],
        email: newUser.email,
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        password: newUser.password
      };


      // this.users[indexUser] = {
      //   id: userId,
      //   email: newUser.email,
      //   firstname: newUser.firstname,
      //   lastname: newUser.lastname,
      //   password: newUser.password
      // };
    }


    if (indexUser == -1) {
      console.error('User to delete not found');
    }
  }



}
