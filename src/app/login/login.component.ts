import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Subject, takeUntil } from 'rxjs';

import { AuthService } from '../core/services/auth/auth.service';
import { User } from '../core/models/user';

@Component({
  selector: 'ngsocial-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.minLength(6),
      Validators.required,
    ]),
  });

  private unsubscribe$ = new Subject<void>();

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.loginForm.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  login(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const loginData = this.loginForm.value as User;

    this.auth.login(loginData).subscribe();
  }
}
