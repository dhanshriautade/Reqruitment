import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  data;
  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      rememberset: ['']
    });
    if (localStorage.getItem('email') != 'null' || localStorage.getItem('password') != 'null') {
      this.loginForm.setValue({
        email: localStorage.getItem('email'),
        password: localStorage.getItem('password'),
        rememberset: localStorage.getItem('rememberset'),
      })
    }
  }
  get f() { return this.loginForm.controls; }


  onSubmit() {
    this.markFormTouched(this.loginForm);
    if (this.loginForm.valid) {

      var formValues = this.loginForm.getRawValue;

    } else {
      this.loginForm.controls['rememberset'].setValue(false);
    }


    const rememberset = this.loginForm.value.rememberset;
    if (rememberset) {
      localStorage.setItem('email', this.loginForm.value.email);
      localStorage.setItem('password', this.loginForm.value.password);
      localStorage.setItem('rememberset', this.loginForm.value.rememberset);

    }
    else {
      localStorage.setItem('email', 'null');
      localStorage.setItem('password', 'null');
      localStorage.setItem('rememberset', 'null');
    }
    this.data = {
      "email": this.loginForm.value.email,
      "password": this.loginForm.value.password
    }
    console.log(JSON.stringify(this.data));

    this.submitted = true;
    if (this.loginForm.invalid) {
      return;

    }
  }
  markFormTouched(group: FormGroup | FormArray) {
    Object.keys(group.controls).forEach((key: string) => {
      const control = group.controls[key];
      if (control instanceof FormGroup || control instanceof FormArray) { control.markAsTouched(); this.markFormTouched(control); }
      else { control.markAsTouched(); };
    });
  };
}