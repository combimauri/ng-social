import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

import { Post } from '../post/post.model';

@Component({
  selector: 'ngsocial-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent {
  post$ = this.route.data.pipe(map(({ post }) => post as Post));

  constructor(private route: ActivatedRoute) {}
}
