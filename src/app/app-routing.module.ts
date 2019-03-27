import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutAccountComponent } from './layout/layout-account/layout-account.component';
import { AccountListPageComponent } from './pages/account/account-list-page/account-list-page.component';
import { AccountCreatePageComponent } from './pages/account/account-create-page/account-create-page.component';
import { AccountUpdatePageComponent } from './pages/account/account-update-page/account-update-page.component';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: './module/user/user.module#UserModule'
  },
  {
    path: 'accountTest',
    loadChildren: './module/account/account.module#AccountModule'
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
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
