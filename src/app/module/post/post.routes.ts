import { Routes } from '@angular/router';
import { PostLayoutComponent } from './layout/post-layout/post-layout.component';
import { PostListPageComponent } from './pages/post-list-page/post-list-page.component';

export const postRoutes: Routes = [{
  path: '',
  component: PostLayoutComponent,
  children: [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: PostListPageComponent }
  ]
}];
