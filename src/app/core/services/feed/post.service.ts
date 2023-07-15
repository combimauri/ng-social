import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';

import { Post } from 'src/app/core/models/post.model';
import { CommentService } from './comment.service';
import { UserStateService } from '../state/user-state.service';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(
    private http: HttpClient,
    private commentService: CommentService,
    private userState: UserStateService,
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
    return this.http.get<Post>(`http://localhost:3000/post/${id}`).pipe(
      map((post) => {
        post.comments$ = this.commentService.getCommentsByPost(post._id);

        return post;
      }),
    );
  }

  savePost(text: string): Observable<Post> | undefined {
    return this.userState.userId$?.pipe(
      switchMap((userId) =>
        this.http.post<Post>('http://localhost:3000/post', {
          text,
          author: userId,
        }),
      ),
    );
  }

  deletePost(id: string): Observable<Post> {
    return this.http.delete<Post>(`http://localhost:3000/post/${id}`).pipe(
      map((post) => {
        post.comments$ = this.commentService.deleteByPost(post._id);

        return post;
      }),
    );
  }
}
