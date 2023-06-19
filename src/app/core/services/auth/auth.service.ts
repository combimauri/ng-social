import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(userData: {
    username: string;
    password: string;
  }): Observable<unknown> {
    return this.http.post<unknown>(
      'http://localhost:3000/auth/signup',
      userData
    );
  }
}
