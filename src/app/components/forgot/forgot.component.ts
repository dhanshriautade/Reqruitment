import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  
  forgetForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.forgetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  get f() { return this.forgetForm.controls; }
  onSubmit(){
    this.submitted=true;
    if(this.forgetForm.invalid){
      return;
  
    }
  }
}
