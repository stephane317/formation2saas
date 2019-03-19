import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListPageComponent } from './pages/user/user-list-page/user-list-page.component';
import { UserCreatePageComponent } from './pages/user/user-create-page/user-create-page.component';
import { UserUpdatePageComponent } from './pages/user/user-update-page/user-update-page.component';
import { LayoutUserComponent } from './layout/layout-user/layout-user.component';
import { LayoutAccountComponent } from './layout/layout-account/layout-account.component';
import { AccountListPageComponent } from './pages/account/account-list-page/account-list-page.component';
import { AccountCreatePageComponent } from './pages/account/account-create-page/account-create-page.component';
import { AccountUpdatePageComponent } from './pages/account/account-update-page/account-update-page.component';

const routes: Routes = [
  {
    path: 'user',
    component: LayoutUserComponent,
    children: [
      { path: 'list', component: UserListPageComponent },
      { path: 'create', component: UserCreatePageComponent },
      { path: 'update/:id', component: UserUpdatePageComponent }
    ]
  },
  {
    path: 'account',
    component: LayoutAccountComponent,
    children: [
      { path: 'list', component: AccountListPageComponent },
      { path: 'create', component: AccountCreatePageComponent },
      { path: 'update/:id', component: AccountUpdatePageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
