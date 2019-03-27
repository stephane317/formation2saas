import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { AppComponent } from './app.component';
import { AccountCreatePageComponent } from './pages/account/account-create-page/account-create-page.component';
import { AccountUpdatePageComponent } from './pages/account/account-update-page/account-update-page.component';
import { AccountListPageComponent } from './pages/account/account-list-page/account-list-page.component';
import { AccountEditionComponent } from './components/account/account-edition/account-edition.component';
import { AccountCardComponent } from './components/account/account-card/account-card.component';
import { LayoutAccountComponent } from './layout/layout-account/layout-account.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AccountCreatePageComponent,
    AccountUpdatePageComponent,
    AccountListPageComponent,
    AccountEditionComponent,
    AccountCardComponent,
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
