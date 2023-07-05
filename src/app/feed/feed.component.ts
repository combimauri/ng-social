import { Component, OnInit } from '@angular/core';

import { PostService } from '../core/services/feed/post.service';
import { catchError, tap } from 'rxjs';
import { UserStateService } from '../core/services/state/user-state.service';

@Component({
  selector: 'ngsocial-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  posts$ = this.postService.getPosts().pipe(
    tap(console.log),
    catchError((error) => {
      this.handleError(error);

      throw error;
    })
  );

  constructor(
    private postService: PostService,
    private userState: UserStateService
  ) {}

  ngOnInit(): void {
    this.userState.userId$?.subscribe(console.log);
  }

  private handleError(error: Error): void {
    console.error(error);
  }
}
