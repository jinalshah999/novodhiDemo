import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private _router: Router) {}
  currentUser = null;
  login(username: string, password: string) {
    localStorage.setItem('user_name', username);

    //replace your logic for login
    if (username === 'admin') {
      this.currentUser = {
        id: 'admin@gmail.com',
        uname: 'admin',
        isAdmin: true,
      };
      return;
    }
    this.currentUser = {
      id: username + '@gmail.com',
      uname: username,
      isAdmin: false,
    };
  }
  logout() {
    localStorage.clear();
    this._router.navigate(['/']);
  }
}
