import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

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
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    rememberset:['']
  });
  if (localStorage.getItem('email') != 'null' || localStorage.getItem('password') != 'null'){
    this.loginForm.setValue({
      email: localStorage.getItem('email'),
      password: localStorage.getItem('password'),
      rememberset : localStorage.getItem('rememberset'),
      })
    }
  }
  get f() { return this.loginForm.controls; }

  
  onSubmit(){
    
    const rememberset = this.loginForm.value.rememberset;
    if (rememberset) {
      localStorage.setItem('email', this.loginForm.value.email);
      localStorage.setItem('password', this.loginForm.value.password);
      localStorage.setItem('rememberset', this.loginForm.value.rememberset);

  } 
  else 
  {
    localStorage.setItem('email', 'null');
    localStorage.setItem('password', 'null');
    localStorage.setItem('rememberset', 'null');
  }
    this.data = {
      "email": this.loginForm.value.email,
      "password": this.loginForm.value.password
    }
    console.log(JSON.stringify(this.data));
    
  this.submitted=true;
  if(this.loginForm.invalid){
    return;

  }
}
}
