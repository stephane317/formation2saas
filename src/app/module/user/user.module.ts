import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserEditionComponent } from './components/user-edition/user-edition.component';
import { UserCreatePageComponent } from './pages/user-create-page/user-create-page.component';
import { UserUpdatePageComponent } from './pages/user-update-page/user-update-page.component';
import { UserListPageComponent } from './pages/user-list-page/user-list-page.component';
import { LayoutUserComponent } from './layout/layout-user/layout-user.component';
import { RouterModule } from '@angular/router';


import { userRoutes } from './user.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    UserCardComponent,
    UserEditionComponent,
    UserCreatePageComponent,
    UserUpdatePageComponent,
    UserListPageComponent,
    LayoutUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    SharedModule
  ]
})
export class UserModule { }
