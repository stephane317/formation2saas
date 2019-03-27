import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/api/post.service';
import { Observable } from 'rxjs';
import { filter, tap, switchMap, delay, map } from 'rxjs/operators';
import { post } from 'selenium-webdriver/http';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-post-list-page',
  templateUrl: './post-list-page.component.html',
  styleUrls: ['./post-list-page.component.css']
})
export class PostListPageComponent implements OnInit {
  posts: Observable<any[]>;
  postsFlat: any[];
  constructor(
    private apiPost: PostService
  ) { }

  ngOnInit() {
    this.loadData();
  }
  loadData(): any {

    this.apiPost.getPosts()
      .pipe(
        filter(posts => posts.length >= 100),
        map(elem => ({ ...elem, toto: 'testtest' })),
        tap(() => console.log('----> test'))
      )
      .subscribe(posts => {
        console.log('-----> posts', posts);
        this.posts = posts;
      });
  }




}
