import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';

import { Post } from '../../core/models/post.model';
import { CommentService } from 'src/app/core/services/feed/comment.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'ngsocial-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnDestroy {
  @Input() post: Post | null = null;

  private unsubscribe$ = new Subject<void>();

  constructor(private commentService: CommentService) {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  saveComment(text: string): void {
    if (this.post) {
      this.commentService
        .saveComment(text, this.post._id)
        ?.pipe(takeUntil(this.unsubscribe$))
        .subscribe();
    }
  }
}
