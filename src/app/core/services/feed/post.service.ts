import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { Post } from 'src/app/core/models/post.model';
import { CommentService } from './comment.service';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(
    private http: HttpClient,
    private commentService: CommentService,
  ) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:3000/post').pipe(
      map((posts) => {
        posts.forEach((post) => {
          post.comments$ = this.commentService.getCommentsByPost(post._id);
        });

        return posts;
      }),
    );
  }

  getPostDetails(id: string): Observable<Post> {
    return this.http.get<Post>(`http://localhost:3000/post/${id}`);
  }
}
