import { Component, OnInit } from '@angular/core';
import { MustMatch } from '../_helpers/must-match.validator';
import { FormBuilder, FormGroup, Validators ,FormArray} from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.resetForm = this.formBuilder.group({
     // email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],   
      confpassword: ['', Validators.required]
    },
        {
            validator: MustMatch('password', 'confpassword')
        }
    );

}
get f() { return this.resetForm.controls; }
Login() {
  this.markFormTouched(this.resetForm);
   this.submitted = true;
    
    if (this.resetForm.invalid) {
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