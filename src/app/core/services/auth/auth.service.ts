import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

import { User } from '../../models/user.model';
import { UserService } from '../user/user.service';
import { UserStateService } from '../state/user-state.service';

interface TokenData {
  access_token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  get token(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.AUTH_TOKEN_KEY);
    }

    return null;
  }

  private readonly AUTH_TOKEN_KEY = 'ngsocial_auth_token';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private http: HttpClient,
    private userService: UserService,
    private userState: UserStateService,
    private router: Router,
  ) {}

  login(userData: User): Observable<Partial<User>> {
    return this.http
      .post<TokenData>('http://localhost:3000/auth/login', userData)
      .pipe(
        switchMap((tokenData) => {
          this.saveToken(tokenData.access_token);

          return this.userService.getUserProfile();
        }),
      );
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.AUTH_TOKEN_KEY);
    }

    this.userState.clearUser();
    this.router.navigate(['/login']);
  }

  signup(userData: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/auth/signup', userData);
  }

  isLoggedIn(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !!this.token;
    }

    return false;
  }

  private saveToken(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('ngsocial_auth_token', token);
    }
  }
}
