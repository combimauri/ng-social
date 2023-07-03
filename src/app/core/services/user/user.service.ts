import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from '../../models/user.model';
import { UserStateService } from '../state/user-state.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private userState: UserStateService) {}

  getUserProfile(): Observable<Partial<User>> {
    return this.http
      .get<Partial<User>>('http://localhost:3000/user/profile')
      .pipe(tap((user) => this.userState.setUserId(user._id || '')));
  }
}
