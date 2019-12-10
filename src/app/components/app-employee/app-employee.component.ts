import { Component, OnInit,Input, Output, EventEmitter, } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-app-employee',
  templateUrl: './app-employee.component.html',
  styleUrls: ['./app-employee.component.scss']
})

export class AppEmployeeComponent implements OnInit {
  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();
  employeeForm = new FormGroup({
    
  })
  devicedetails
  useradd: boolean = false;
  submitted: boolean;
  constructor(private formBuilder: FormBuilder) { }
  showDialog() {
    this.display = true;
  }
  AddDevice(){
    this.useradd = true;
  }

  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      firstName:['', [Validators.required, Validators.pattern(/^\S*$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^\S*$/)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNo:['',[Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      dob:['',Validators.required],
      areacode:['',Validators.required],
      id:['',Validators.required],
      idno:['',Validators.required],
      designation:['',Validators.required]
  })
}

  onClose() {
    // // console.log('close');
    this.displayChange.emit(false);
  }
  ngOnDestroy() {
    this.displayChange.unsubscribe();
  }
  get f() { return this.employeeForm.controls; }
onSubmit() {
  this.markFormTouched(this.employeeForm);
    if (this.employeeForm.valid) {
      
      var formValues = this.employeeForm.getRawValue;

    } else {
      this.employeeForm.controls['rememberset'].setValue(false);
    }
  };

  markFormTouched(group: FormGroup | FormArray) {
    Object.keys(group.controls).forEach((key: string) => {
      const control = group.controls[key];
      if (control instanceof FormGroup || control instanceof FormArray) { control.markAsTouched(); this.markFormTouched(control); }
      else { control.markAsTouched(); };
    });
  };
}
