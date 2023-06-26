import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { User } from '../../models/user';

interface TokenData {
  access_token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(userData: User): Observable<TokenData> {
    return this.http
      .post<TokenData>('http://localhost:3000/auth/login', userData)
      .pipe(tap((tokenData) => this.saveToken(tokenData.access_token)));
  }

  signup(userData: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/auth/signup', userData);
  }

  private saveToken(token: string): void {
    window.localStorage.setItem('ngsocial_auth_token', token);
  }
}
