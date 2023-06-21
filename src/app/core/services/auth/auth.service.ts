import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(userData: User): Observable<User> {
    return this.http.post<User>(
      'http://localhost:3000/auth/login',
      userData
    );
  }

  signup(userData: User): Observable<User> {
    return this.http.post<User>(
      'http://localhost:3000/auth/signup',
      userData
    );
  }
}
