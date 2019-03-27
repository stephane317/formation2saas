import { Routes } from '@angular/router';
import { LayoutUserComponent } from './layout/layout-user/layout-user.component';
import { UserListPageComponent } from './pages/user-list-page/user-list-page.component';
import { UserCreatePageComponent } from './pages/user-create-page/user-create-page.component';
import { UserUpdatePageComponent } from './pages/user-update-page/user-update-page.component';


export const userRoutes: Routes = [{
  path: '',
  component: LayoutUserComponent,
  children: [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: UserListPageComponent },
    { path: 'create', component: UserCreatePageComponent },
    { path: 'update/:id', component: UserUpdatePageComponent }
  ]
}];
