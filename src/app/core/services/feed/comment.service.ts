import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Comment } from '../../models/comment.model';
import { UserStateService } from '../state/user-state.service';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(
    private http: HttpClient,
    private userState: UserStateService,
  ) {}

  getCommentsByPost(postId: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(
      `http://localhost:3000/comment?postId=${postId}`,
    );
  }

  deleteByPost(postId: string): Observable<Comment[]> {
    return this.http.delete<Comment[]>(
      `http://localhost:3000/comment?postId=${postId}`,
    );
  }

  saveComment(text: string, post: string): Observable<Comment> | undefined {
    return this.userState.userId$?.pipe(
      switchMap((author) =>
        this.http.post<Comment>('http://localhost:3000/comment', {
          text,
          post,
          author,
        }),
      ),
    );
  }
}
