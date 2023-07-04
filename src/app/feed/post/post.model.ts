import { User } from 'src/app/core/models/user.model';

export interface Post {
  _id: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  author: User;
}
