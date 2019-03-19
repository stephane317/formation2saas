import { Component, OnInit } from '@angular/core';
import { IAccount } from 'src/app/interface/account.interface';

@Component({
  selector: 'app-account-list-page',
  templateUrl: './account-list-page.component.html',
  styleUrls: ['./account-list-page.component.css']
})
export class AccountListPageComponent implements OnInit {

  accounts: IAccount[];

  constructor() { }

  ngOnInit() {
  }

}
