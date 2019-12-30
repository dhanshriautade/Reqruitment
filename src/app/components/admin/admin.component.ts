import { Component, OnInit } from '@angular/core';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';
import { EmployeeService } from 'src/app/services/employee.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
selector: 'app-admin',
templateUrl: './admin.component.html',
styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
display = false;
employeeForm = new FormGroup({

  })
  devicedetails
  displaylist = true;
  useradd: boolean = false;
  submitted: boolean;
  data;
  term;
  dataone;
  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  constructor(private formBuilder: FormBuilder, public EmployeeService: EmployeeService) { 
    
    this.EmployeeService.getEmployee().subscribe(res => {
       this.data = res;
       debugger;
       for(var i = 0; i < this.data.length; i++){
        this.dataone.push(this.data[i]);
        

       }
       console.log('list',this.dataone);
    })

}
showDialog() {
this.display = true;
}
AddDevice() {
this.useradd = true;
}



  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      title: ['',Validators.required],
      firstName: ['', [Validators.required, Validators.pattern(/^\S*$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^\S*$/)]],
      email: ['', [Validators.required, Validators.email]],
      //phoneNo: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      phone:['', Validators.required],
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
//"phoneNo": this.employeeForm.value.phoneNo,
"contact": this.employeeForm.value.phone.number,
"dob": this.employeeForm.value.dob,
"passport": this.employeeForm.value.passport,
"pan": this.employeeForm.value.pan,
"adhar": this.employeeForm.value.adhar,
"drivingLicence": this.employeeForm.value.drivingLicence,
"voterId": this.employeeForm.value.voterId,
"status": "1"
};

this.EmployeeService.AddEmployee(JSON.stringify(this.data)).subscribe(res => {

})

this.display = false;


}
PersonalInfo(){
this.display = true;
this.displaylist = false;
}
removeSkill(){
  this.display = false;
this.displaylist = true;
}
}