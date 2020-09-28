import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  invalidNamesArr: string[] = ['hello', 'angular'];
  constructor() {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      user_name: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        this.invalidUserNameValidation.bind(this),
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

  invalidUserNameValidation(
    control: AbstractControl
  ): { [key: string]: boolean } {
    if (this.invalidNamesArr.indexOf(control.value) >= 0) {
      return { invalidName: true };
    }
    return null;
  }
}
