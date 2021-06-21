import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/models/user-details';
import { AuthenticationService } from '../../service/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private router: Router, private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.createform();
  }

  createform(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(8), Validators.required])
    });
  }

  onSignupClick() {
    this.router.navigateByUrl('signUp');
  }

  login() {
    if (this.loginForm.valid) {
      if (this.auth.logIn(this.loginForm.get('email').value, this.loginForm.get('password').value)) {
        this.router.navigateByUrl('home');
      }
    }
  }
}


