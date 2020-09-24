import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      user_name: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
      user_email: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
    });
  }
  onSignup() {
    console.log(this.signupForm);
  }
}
