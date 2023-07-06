import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { EMPTY, catchError } from 'rxjs';

import { Post } from '../../core/models/post.model';
import { PostService } from '../../core/services/feed/post.service';
import { LoggerService } from '../../core/services/logger/logger.service';

export const postResolver: ResolveFn<Post> = (route, _state) => {
  const postService = inject(PostService);
  const postId = route.paramMap.get('postId') || '';
  const router = inject(Router);
  const logger = inject(LoggerService);

  return postService.getPostDetails(postId).pipe(
    catchError((error) => {
      router.navigate(['/']);
      logger.error(error);

      return EMPTY;
    }),
  );
};
