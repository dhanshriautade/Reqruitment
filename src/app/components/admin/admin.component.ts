import { Component, OnInit } from '@angular/core';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';
import { EmployeeService } from 'src/app/services/employee.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  currentStatusdisplay = false;
  displayCertification = false;
  displayEducation = false;
  display = false;
  employeeForm = new FormGroup({
  });

  departmentsAndDesignations: any = [];
  action = 'Save'
  designationList: any = [];
  devicedetails
  displaylist = true;
  useradd: boolean = false;
  submitted: boolean;
  totalItems = 0;
  data;
  datajob;
  docArray = [];
  documentArray = [];
  editStatus = false;
  docidArray = [];
  term;
  spinner = false;
  dataone;
  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  infodetail = [];
  getjob = [];
  configer: any;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, public EmployeeService: EmployeeService) {

    this.departmentsAndDesignations = [['Software', ["Android", "IOS", "Java"]], ["Embedded", ["Embedded department 1", "Embedded department 2", "Embedded department 3"]], ["Mechanical", ["Mechanical department 1", "Mechanical department 2", "Mechanical department 3"]]];
    this.getAllEmployeesList();
    this.getAllJobInfo();
  }

  getDesignationList() {
    let dept = this.employeeForm.get('department').value;
    let map = new Map(this.departmentsAndDesignations);

    for (let entry of map.entries()) {
      if (dept === entry[0]) {
        this.designationList = entry[1];
      }
    }
  }

  getAllJobInfo() {
    this.EmployeeService.getAllJob().subscribe(res => {
      this.getjob = [];
      this.datajob = res;
      let keys = Object.keys(this.datajob);
      for (var i = 0; i < keys.length; i++) {
        this.getjob.push(this.datajob[keys[i]]);
      }
      this.configer = {
        itemsPerPage: 8,
        currentPage: 1,
        totalItems: this.getjob.length
      };
      console.log('getalljob', res);
    });
  }


  EditEmployee(i: any) {
    console.log('edit', this.infodetail[i]);
    this.action = ''
    this.display = true;
    this.displaylist = false;

    this.editStatus = true;
    this.employeeForm.get('firstName').setValue(this.infodetail[i].firstName);
    this.employeeForm.get('lastName').setValue(this.infodetail[i].lastName);
    this.employeeForm.get('title').setValue(this.infodetail[i].title);
    this.employeeForm.get('email').setValue(this.infodetail[i].email);
    this.employeeForm.get('phone').setValue(this.infodetail[i].phoneNo);
    this.employeeForm.get('phone').setValue(this.infodetail[i].contact);
    this.employeeForm.get('dob').setValue(this.infodetail[i].dob);
    // this.employeeForm.get('passport').setValue(this.infodetail[i].passport);
    // this.employeeForm.get('pan').setValue(this.infodetail[i].pan);
    // this.employeeForm.get('voterId').setValue(this.infodetail[i].voterId);
    // this.employeeForm.get('adhar').setValue(this.infodetail[i].adhar);
    // this.employeeForm.get('drivingLicence').setValue(this.infodetail[i].drivingLicence);




  }

  DeleteEmployee(email: any) {
    const emailData =
    {
      "email": email
    }


    this.EmployeeService.DeleteEmployee(emailData).subscribe(res => {
    })
    this.getAllEmployeesList();

  }
  getAllEmployeesList() {
    this.EmployeeService.getEmployee().subscribe(res => {
      this.infodetail = [];
      this.data = res;
      let keys = Object.keys(this.data);
      // console.log('keys', keys);
      for (var i = 0; i < keys.length; i++) {
        this.infodetail.push(this.data[keys[i]]);
      }
      this.configer = {
        itemsPerPage: 8,
        currentPage: 1,
        totalItems: this.infodetail.length
      };
      // console.log('list', this.infodetail);
    });
  }
  pageChanged(event) {
    this.configer.currentPage = event;
  }
  showDialog() {
    this.display = true;
  }
  AddDevice() {
    this.useradd = true;
  }



  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', [Validators.required, Validators.pattern(/^\S*$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^\S*$/)]],
      email: ['', [Validators.required, Validators.email]],
      //phoneNo: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      phone: ['', Validators.required],
      dob: ['', Validators.required],
      ID: ['', Validators.required],
      idno: ['', Validators.required],
      passport: [''],
      pan: [''],
      adhar: [''],
      drivingLicence: [''],
      voterId: ['',],
      status: [''],
      department: [''],
      designation: ['']
    })
  }

  get f() { return this.employeeForm.controls; }
  onSubmit(action) {
    console.log('action', action)

    this.submitted = true;
    this.spinner = true;
    if (this.employeeForm.invalid) {
      return;
    }
    this.data = {
      "title": this.employeeForm.value.title,
      "firstName": this.employeeForm.value.firstName,
      "lastName": this.employeeForm.value.lastName,
      "email": this.employeeForm.value.email,
      "phoneNo": this.employeeForm.value.phone.number,
      "contact": this.employeeForm.value.phone.number,
      "dob": this.employeeForm.value.dob,
      "passport": this.employeeForm.value.passport,
      "pan": this.employeeForm.value.pan,
      "adhar": this.employeeForm.value.adhar,
      "drivingLicence": this.employeeForm.value.drivingLicence,
      "voterId": this.employeeForm.value.voterId,
      "status": "1"
    };
    if (action == 'Save') {
      this.EmployeeService.AddEmployee(JSON.stringify(this.data)).subscribe(res => {
        this.spinner = false;
        this.submitted = false;
        this.employeeForm.reset();
        this.docArray = [];
        this.toastr.success('Successfully added Employee !!!');

      })
    }
    else {
      this.EmployeeService.UpdateEmployee(JSON.stringify(this.data)).subscribe(res => {
        this.spinner = false;
        this.submitted = false;
        this.employeeForm.reset();
        this.docArray = [];
        this.toastr.success('Successfully Updated Employee !!!');

      })
    }
    this.employeeForm.reset();
    this.spinner = false;
    this.display = false;

    this.getAllEmployeesList();



  }
  markFormTouched(employeeForm: any) {
    throw new Error("Method not implemented.");
  }
  AddEducation(){
    this.displayEducation=true;
  }
  AddCertification(){
    this.displayCertification=true;
  }
  PersonalInfo() {
    this.display = true;
    this.displaylist = false;
    this.action = 'Save';
    this.currentStatusdisplay = false;
  }
 

  selectedDepartment(selectedDepartment: any) {
    throw new Error("Method not implemented.");
  }
  ViewJob() {
    this.currentStatusdisplay = true;
    this.displaylist = false;
    this.display = false;
    }
  removeSkill() {
    this.display = false;
    this.currentStatusdisplay = false;   
    this.displaylist = true;
  }
  removealljob(){
    this.currentStatusdisplay = false;
    this.displaylist=true;
  }
  removeEducation(){
    this.displayEducation=false;
  }
  removeCertification(){
    this.displayCertification=false
  }
  addDocument() {
    this.docArray.push(this.employeeForm.get('ID').value + this.employeeForm.get('idno').value)
    this.documentArray.push(this.employeeForm.get('idno').value)
    this.docidArray.push(this.employeeForm.get('ID').value);

    if (this.employeeForm.value.ID === 'Adhar Card') {
      this.employeeForm.value.adhar = this.employeeForm.get('idno').value;
    } else if (this.employeeForm.value.ID === 'Passport') {
      this.employeeForm.value.passport = this.employeeForm.get('idno').value;
    } else if (this.employeeForm.value.ID === 'PAN Card') {
      this.employeeForm.value.pan = this.employeeForm.get('idno').value;
    } else if (this.employeeForm.value.ID === 'Driving Lincese') {
      this.employeeForm.value.drivingLicence = this.employeeForm.get('idno').value;
    } else if (this.employeeForm.value.ID === 'Voter ID') {
      this.employeeForm.value.voterId = this.employeeForm.get('idno').value;
    }

  }
  removeDoc(i: any) {
    this.docArray.splice(i, 1);
  }

}


interface DesignationAndDepartment {
  department: string[];
}