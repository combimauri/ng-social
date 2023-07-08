import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth/auth.service';
import { UserStateService } from '../../services/state/user-state.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'ngsocial-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  userMenuOpen = false;
  userName$ = this.userState.userName$;

  constructor(
    private auth: AuthService,
    private userState: UserStateService,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.userService.getUserProfile().subscribe();
    }
  }

  openUserMenu(): void {
    this.userMenuOpen = true;
  }

  closeUserMenu(): void {
    this.userMenuOpen = false;
  }

  logout(): void {
    this.closeUserMenu();
    this.auth.logout();
  }
}
