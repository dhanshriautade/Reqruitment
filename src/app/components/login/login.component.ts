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
  
  
 
  onSubmit(){
    this.markFormTouched(this.loginForm);
    if (this.loginForm.valid) {
      
      var formValues = this.loginForm.getRawValue;

    } else {
      this.loginForm.controls['rememberset'].setValue(false);
    }
  };

  markFormTouched(group: FormGroup | FormArray) {
    Object.keys(group.controls).forEach((key: string) => {
      const control = group.controls[key];
      if (control instanceof FormGroup || control instanceof FormArray) { control.markAsTouched(); this.markFormTouched(control); }
      else { control.markAsTouched(); };
    });
  };


     
  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
   // email: ['', [Validators.required, Validators.email]],
    email: ['', Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])],
    //  phoneno: ['', [Validators.required ,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    password: ['', [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
   Recaptcha: ['',Validators.required],
   //recaptchaReactive:['', Validators.required)],
  
    rememberset:[false]
  });
 
  }
 
}

