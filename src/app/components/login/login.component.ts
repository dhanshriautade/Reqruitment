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

  

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
     phoneno: ['', [Validators.required ,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    password: ['', [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
   // captcha: ['',Validators.required],
    rememberset:['']
  });
  }
  get f() { return this.loginForm.controls; }

  
  onSubmit(){
  this.submitted=true;
  if(this.loginForm.invalid){
    return;

  }
}
}
