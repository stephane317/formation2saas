import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostLayoutComponent } from './layout/post-layout/post-layout.component';
import { PostListPageComponent } from './pages/post-list-page/post-list-page.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { postRoutes } from './post.routes';

@NgModule({
  declarations: [
    PostLayoutComponent,
    PostListPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(postRoutes)
  ]
})
export class PostModule { }
