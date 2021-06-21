import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserDetails } from '../models/user-details';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  currentUser: UserDetails;
  currentUserSubject = new BehaviorSubject<UserDetails>(null);
  constructor(private router: Router) {
    this.currentUserSubject.next(JSON.parse(localStorage.getItem('currentUser')));
  }

  logIn(email: string, password: string): boolean {
    this.currentUser = { email, password } as UserDetails;
    this.currentUserSubject.next(this.currentUser);
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    return true;
  }
  logOut(): boolean {
    this.currentUserSubject.next(null);
    localStorage.clear();
    this.router.navigateByUrl('login');
    return true;
  }
}
