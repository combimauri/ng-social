import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Post } from 'src/app/feed/post/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:3000/post');
  }

  getPostDetails(id: string): Observable<Post> {
    return this.http.get<Post>(`http://localhost:3000/post/${id}`);
  }
}
