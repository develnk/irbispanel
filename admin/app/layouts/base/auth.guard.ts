import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginData, Permissions } from '../../pages/login/components/login';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    let current: LoginData = JSON.parse(sessionStorage.getItem('current_user'));
    if (current  && current.status == 1) {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }

}
