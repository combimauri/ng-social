import { Component } from '@angular/core';

import { Post } from './post/post.model';

@Component({
  selector: 'ngsocial-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent {
  posts: Post[] = [
    { value: 'Test1', date: new Date() },
    { value: 'Test2', date: new Date() },
    { value: 'Test3', date: new Date() },
  ];
}
