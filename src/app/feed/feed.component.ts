import { Component, OnInit } from '@angular/core';

import { Post } from './post/post.model';
import { LoggerService } from '../core/services/logger/logger.service';

@Component({
  selector: 'ngsocial-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  posts: Post[] = [
    { id: '1', value: 'Test1', date: new Date() },
    { id: '2', value: 'Test2', date: new Date() },
    { id: '3', value: 'Test3', date: new Date() },
  ];

  constructor(private logger: LoggerService) {}

  ngOnInit(): void {
    this.logger.log('Feed has loaded');
  }
}
