import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserDetails } from '../models/user-details';
import { AuthenticationService } from '../service/authentication-service.service';

@Injectable({ providedIn: 'root' })
export class AuthGaurd implements CanActivate {
    currentUser: UserDetails;
    constructor(private authenticationService: AuthenticationService, private route: Router) {
        authenticationService.currentUserSubject.subscribe(v => this.currentUser = v);
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.currentUser) {
            return true;
        }
        this.route.navigateByUrl('login');
    }

}
