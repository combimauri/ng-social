import { Component, OnDestroy } from '@angular/core';
import { Subject, catchError, takeUntil } from 'rxjs';

import { PostService } from '../core/services/feed/post.service';
import { LoggerService } from '../core/services/logger/logger.service';

@Component({
  selector: 'ngsocial-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnDestroy {
  posts$ = this.postService.getPosts().pipe(
    catchError((error) => {
      this.handleError(error);

      throw error;
    }),
  );
  private unsubscribe$ = new Subject<void>();

  constructor(
    private postService: PostService,
    private logger: LoggerService,
  ) {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  savePost(text: string): void {
    this.postService
      .savePost(text)
      ?.pipe(takeUntil(this.unsubscribe$))
      .subscribe();
  }

  private handleError(error: Error): void {
    this.logger.error(error);
  }
}
