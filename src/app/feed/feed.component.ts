import { Component } from '@angular/core';
import { catchError } from 'rxjs';

import { PostService } from '../core/services/feed/post.service';
import { LoggerService } from '../core/services/logger/logger.service';

@Component({
  selector: 'ngsocial-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent {
  posts$ = this.postService.getPosts().pipe(
    catchError((error) => {
      this.handleError(error);

      throw error;
    }),
  );

  constructor(
    private postService: PostService,
    private logger: LoggerService,
  ) {}

  private handleError(error: Error): void {
    this.logger.error(error);
  }
}
