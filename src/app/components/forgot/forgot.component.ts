import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  data;
  forgetForm: FormGroup;
  loading = false;
  submitted = false;
  spinner = false;
  constructor(private formBuilder: FormBuilder,public TeamService: TeamService,private toastr: ToastrService) { }

  ngOnInit() {
    this.forgetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  get f() { return this.forgetForm.controls; }
  Login(){

    this.markFormTouched(this.forgetForm);
    if (this.forgetForm.valid) {
      
      var formValues = this.forgetForm.getRawValue;

    } else {
      this.forgetForm.controls['rememberset'].setValue(false);
    }
    
    this.submitted = true;
    
    if (this.forgetForm.invalid) {
      return;
    }
    else{
      this.spinner = true;
      console.log(this.forgetForm.value);
      this.TeamService.forgot(this.forgetForm.value.email).subscribe(res => {
        this.forgetForm.reset();
      
     
    })
    this.toastr.success('Successfully Created !!!'); 
    this.spinner = false;
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
