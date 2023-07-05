import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeedComponent } from './feed.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { postResolver } from './post/post.resolver';

const routes: Routes = [
  {
    path: '',
    component: FeedComponent,
  },
  {
    path: ':postId',
    component: PostDetailsComponent,
    resolve: {
      post: postResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedRoutingModule {}
