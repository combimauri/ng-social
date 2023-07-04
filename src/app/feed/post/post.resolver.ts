import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

import { PostService } from 'src/app/core/services/feed/post.service';
import { Post } from './post.model';

export const postResolver: ResolveFn<Post> = (route, _state) => {
  const postService = inject(PostService);
  const postId = route.paramMap.get('postId') || '';

  return postService.getPostDetails(postId);
};
