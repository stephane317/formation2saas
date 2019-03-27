import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/app/interface/user.interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-edition',
  templateUrl: './user-edition.component.html',
  styleUrls: ['./user-edition.component.css']
})
export class UserEditionComponent implements OnInit {

  @Input() user: IUser;

  @Output() onSaveUser: EventEmitter<IUser> = new EventEmitter();
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }
  initForm(): any {
    this.userForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      password: ['']
    })

    if (this.user) {
      this.patchForm();
    }
  }

  patchForm() {
    this.userForm.patchValue(this.user);
  }

  saveUser() {
    let { value } = this.userForm;
    this.onSaveUser.emit(value);
  }

}
