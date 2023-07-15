import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';
import { PostComponent } from './post/post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { CollapseTextDirective } from './post/collapse-text.directive';
import { PostFormComponent } from './post-form/post-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FeedComponent,
    PostComponent,
    PostDetailsComponent,
    CollapseTextDirective,
    PostFormComponent,
  ],
  imports: [CommonModule, FeedRoutingModule, ReactiveFormsModule],
})
export class FeedModule {}
