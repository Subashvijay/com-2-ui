import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.createform();
  }
  createform(): void {
    this.signUpForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl(''),
      contactNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(8), Validators.required]),
      confirmPassword: new FormControl(),
    });
  }

  onblurConfirmPass(): void {
    if (this.signUpForm.get('password').value !== this.signUpForm.get('confirmPassword').value) {
      this.signUpForm.get('confirmPassword').setErrors({ invalid: true });
    } else {
      this.signUpForm.get('confirmPassword').setErrors(null);
    }
  }
}
