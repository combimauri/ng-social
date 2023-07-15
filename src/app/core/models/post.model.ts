import { Observable } from 'rxjs';

import { User } from 'src/app/core/models/user.model';
import { Comment } from './comment.model';

export interface Post {
  _id: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  author: User;
  comments$?: Observable<Comment[]>;
}
