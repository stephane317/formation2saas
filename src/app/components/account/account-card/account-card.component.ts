import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IAccount } from 'src/app/interface/account.interface';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.css']
})
export class AccountCardComponent implements OnInit {


  @Input() account: IAccount;

  @Output() onDelete: EventEmitter<string> = new EventEmitter();
  @Output() onUpdate: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  delete() {
    this.onDelete.emit(this.account.id);
  }
  update() {
    this.onUpdate.emit(this.account.id);
  }
}
