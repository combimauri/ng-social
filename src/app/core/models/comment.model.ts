import { Post } from './post.model';
import { User } from './user.model';

export interface Comment {
  _id: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  author: User;
  post: Post;
}
