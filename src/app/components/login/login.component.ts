import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { TeamService } from 'src/app/services/team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  info;
  spinner = false;
  data;
  constructor(private formBuilder: FormBuilder,public router: Router,private toastr: ToastrService,public TeamService: TeamService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
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
    // this.spinner =  true;
    
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
   
    this.submitted = true;
    
    if (this.loginForm.invalid) {
      return;

    }
    else{
        this.spinner = true;
      this.TeamService.Login(this.data).subscribe(res => { 
                  this.info = res;
                  debugger;

                  if(this.info.status ===  true){
                    this.toastr.success('Successfully signin !!!');
                    this.router.navigateByUrl('/main');
                    this.spinner = false;             
                    this.loginForm.reset();
                    }
                    if (this.info.status === 500 ||this.info.status !=  true ){
                      this.toastr.error('Invalid Successfully signin !!!');
                
                    }
                })
                
                // this.spinner = false;
              
                  

     
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
  

