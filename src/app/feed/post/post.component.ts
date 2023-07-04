import { Component, Input } from '@angular/core';

import { Post } from './post.model';

@Component({
  selector: 'ngsocial-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input() post: Post | null = null;
}
