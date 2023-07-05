import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../../models/comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}

  getCommentsByPost(postId: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(
      `http://localhost:3000/comment?postId=${postId}`
    );
  }
}
