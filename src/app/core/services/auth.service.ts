import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public authenticatedUser: BehaviorSubject<string>;
  constructor(
    private router: Router
  ) {
    this.observeUser();
  }

  observeUser() {
    this.authenticatedUser = new BehaviorSubject<string>(localStorage.getItem('access_token'));
  }

  login() {
    const token = 'logged_in';
    localStorage.setItem('access_token' , token);
    this.router.navigate(['/']);
    this.authenticatedUser.next(token);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['auth/signin']);
    this.authenticatedUser.next(null);
  }
}
