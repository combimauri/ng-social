import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [SignupComponent],
  imports: [CommonModule, LoginRoutingModule, FormsModule],
})
export class LoginModule {}
