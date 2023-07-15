import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'ngsocial-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  @ViewChild('signupForm') signupForm: FormGroup | null = null;

  email = '';
  password = '';

  constructor(private auth: AuthService) {}

  signup(): void {
    if (this.signupForm?.invalid) {
      return;
    }

    this.auth.signup(this.signupForm?.value).subscribe();
  }
}
