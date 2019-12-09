import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';

import { EmployeeService } from 'src/app/services/employee.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

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
  data;
  constructor(private formBuilder: FormBuilder, public EmployeeService: EmployeeService) { }
  showDialog() {
    this.display = true;
  }
  AddDevice() {
    this.useradd = true;
  }



  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      title: [''],
      firstName: ['', [Validators.required, Validators.pattern(/^\S*$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^\S*$/)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNo: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      dob: ['', Validators.required],
      passport: [''],
      pan: [''],
      adhar: [''],
      drivingLicence: [''],
      voterId: ['',],
      status: [''],
      ID: [],
      idno: []
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
    this.submitted = true;
    if (this.employeeForm.invalid) {
      return;
    }
    if (this.employeeForm.value.ID == 'Passport') {
      this.employeeForm.value.passport = this.employeeForm.value.idno;
      this.employeeForm.value.pan = '';
      this.employeeForm.value.adhar = '';
      this.employeeForm.value.drivingLicence = '';
      this.employeeForm.value.voterId = ''
    } else if (this.employeeForm.value.ID == 'PAN Card') {
      this.employeeForm.value.passport = '';
      this.employeeForm.value.pan = this.employeeForm.value.idno;
      this.employeeForm.value.adhar = '';
      this.employeeForm.value.drivingLicence = '';
      this.employeeForm.value.voterId = ''
    } else if (this.employeeForm.value.ID == 'Adhar Card') {
      this.employeeForm.value.passport = '';
      this.employeeForm.value.pan = ''
      this.employeeForm.value.adhar = this.employeeForm.value.idno;
      this.employeeForm.value.drivingLicence = '';
      this.employeeForm.value.voterId = ''
    } else if (this.employeeForm.value.ID == 'Driving Lincese') {
      this.employeeForm.value.passport = '';
      this.employeeForm.value.pan = '';
      this.employeeForm.value.adhar = '';
      this.employeeForm.value.drivingLicence = this.employeeForm.value.idno;
      this.employeeForm.value.voterId = ''
    } else if (this.employeeForm.value.ID == 'Voter ID') {
      this.employeeForm.value.passport = '';
      this.employeeForm.value.pan = '';
      this.employeeForm.value.adhar = '';
      this.employeeForm.value.drivingLicence = '';
      this.employeeForm.value.voterId = this.employeeForm.value.idno;
    }


    this.data = {
      "title": this.employeeForm.value.title,
      "firstName": this.employeeForm.value.firstName,
      "lastName": this.employeeForm.value.lastName,
      "email": this.employeeForm.value.email,
      "phoneNo": this.employeeForm.value.phoneNo,
      "dob": this.employeeForm.value.dob,
      "passport": this.employeeForm.value.passport,
      "pan": this.employeeForm.value.pan,
      "adhar": this.employeeForm.value.adhar,
      "drivingLicence": this.employeeForm.value.drivingLicence,
      "voterId": this.employeeForm.value.voterId,
      "status": "1"
    };

    console.log('list',this.data);

    this.EmployeeService.AddEmployee(this.data).subscribe(res => {

    })


  }
}
