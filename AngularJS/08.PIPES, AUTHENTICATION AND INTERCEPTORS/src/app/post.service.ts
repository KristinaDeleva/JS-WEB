import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts = [
    {
      id: 1,
      userId: 1,
      title: 'Post 1'
    },
    {
      id: 2,
      userId: 1,
      title: 'Post 2'
    }
  ];

  constructor(private http: HttpClient) { }

  load() {
    return observableOf(this.posts).pipe(delay(100));
  }

  create(title: string, content: string) {
    return this.http.post('feed/post/create', { title, content });
  }
}
