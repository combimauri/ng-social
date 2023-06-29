import { Component, OnInit } from '@angular/core';

import { PostService } from '../core/services/feed/post.service';
import { catchError, tap } from 'rxjs';

@Component({
  selector: 'ngsocial-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent {
  posts$ = this.postService.getPosts().pipe(
    tap(console.log),
    catchError((error) => {
      this.handleError(error);

      throw error;
    })
  );

  constructor(private postService: PostService) {}

  handleError(error: Error): void {
    console.error(error);
  }
}
