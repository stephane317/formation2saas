import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountCreatePageComponent } from './pages/account/account-create-page/account-create-page.component';
import { AccountUpdatePageComponent } from './pages/account/account-update-page/account-update-page.component';
import { AccountListPageComponent } from './pages/account/account-list-page/account-list-page.component';
import { UserCreatePageComponent } from './pages/user/user-create-page/user-create-page.component';
import { UserUpdatePageComponent } from './pages/user/user-update-page/user-update-page.component';
import { UserListPageComponent } from './pages/user/user-list-page/user-list-page.component';
import { AccountEditionComponent } from './components/account/account-edition/account-edition.component';
import { AccountCardComponent } from './components/account/account-card/account-card.component';
import { UserEditionComponent } from './components/user/user-edition/user-edition.component';
import { UserCardComponent } from './components/user/user-card/user-card.component';
import { LayoutUserComponent } from './layout/layout-user/layout-user.component';
import { LayoutAccountComponent } from './layout/layout-account/layout-account.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountCreatePageComponent,
    AccountUpdatePageComponent,
    AccountListPageComponent,
    UserCreatePageComponent,
    UserUpdatePageComponent,
    UserListPageComponent,
    AccountEditionComponent,
    AccountCardComponent,
    UserEditionComponent,
    UserCardComponent,
    LayoutUserComponent,
    LayoutAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
