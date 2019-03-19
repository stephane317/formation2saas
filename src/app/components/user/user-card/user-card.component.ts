import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/app/interface/user.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user: IUser;

  @Output() onDelete: EventEmitter<string> = new EventEmitter();
  @Output() onUpdate: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  delete() {
    this.onDelete.emit(this.user.id);
  }
  update() {
    this.onUpdate.emit(this.user.id);
  }

}
