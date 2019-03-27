import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { accountRoutes } from './account.routes';
import { LayoutAccountComponent } from './layout/layout-account/layout-account.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    LayoutAccountComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(accountRoutes),
    SharedModule
  ]
})
export class AccountModule { }
