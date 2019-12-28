import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';
import { HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEventType, HttpParams } from '@angular/common/http';

import { TeamService } from 'src/app/services/team.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  preserveWhitespaces: false
})
export class EmployeeComponent implements OnInit {
  display = false;
  close: any;
  otherfileData: File[] = [];
  infodispaly = true;
  fileUploadProgress: string = null;
  selectedFile = null;
  fileToUpload: File = null;
  valid: boolean = false;
  errormassage: boolean = false;
  val: boolean = false;
  err: boolean = false;

  data;
  value;
  detail;
  check;
  eval;
  checked;
  note;
  idCard;
  pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  submitted: boolean;
  public imagePath;
  imgURL: any;
  public message: string;
  skillArray = [];
  secskillArray = [];
  docArray = [];
  documentArray = [];
  docidArray = [];
  fields: any;
  uploadForm = new FormGroup({

    file: new FormControl(['']),
    secondfile: new FormControl(['']),

  })
  personalInfoForm = new FormGroup({

  })

  idNo: string;



  constructor(private formBuilder: FormBuilder, public TeamService: TeamService, private http: HttpClient) {
    //  this.infodispaly =  true;
    var email = 'dhanshri.autade3@gmail.com';
    this.TeamService.GetProfile(email).subscribe(res => {
      console.log('getprofile', res);
      // this.personalInfoForm.value.firstName = res.


    })
    this.infodispaly = true;
    this.data = [
      { 'num': 1 },
      { 'num': 2 }, { 'num': 3 }, { 'num': 4 }, { 'num': 5 }, { 'num': 6 }, { 'num': 7 }, { 'num': 8 }, { 'num': 9 }, { 'num': 10 }, { 'num': 11 },
      { 'num': 12 }, { 'num': 13 }, { 'num': 14 }, { 'num': 15 }, { 'num': 16 }, { 'num': 17 }, { 'num': 18 }, { 'num': 19 }, { 'num': 20 }, { 'num': 21 },
      { 'num': 22 }, { 'num': 23 }, { 'num': 24 }, { 'num': 25 }, { 'num': 26 }, { 'num': 27 }, { 'num': 28 }, { 'num': 29 }, { 'num': 30 }, { 'num': 31 },
      { 'num': 32 }, { 'num': 33 }, { 'num': 34 }, { 'num': 35 }, { 'num': 36 }, { 'num': 37 }, { 'num': 38 }, { 'num': 39 }, { 'num': 40 }, { 'num': 41 },
      { 'num': 42 }, { 'num': 43 }, { 'num': 44 }, { 'num': 45 }, { 'num': 46 }, { 'num': 47 }, { 'num': 48 }, { 'num': 48 }, { 'num': 49 }, { 'num': 50 }

    ]


    this.detail = [
      { 'id': 1 }, { 'id': 2 }, { 'id': 3 }, { 'id': 4 }, { 'id': 5 }, { 'id': 6 }, { 'id': 7 }, { 'id': 8 }, { 'id': 9 }, { 'id': 10 }, { 'id': 11 }
    ]
    this.check = [
      { 'val': 'Afghanistan' }, { 'val': 'Albania' }, { 'val': 'Algeria' }, { 'val': 'Andorra' }, { 'val': 'Angola' }
      , { 'val': 'Antigua' }, { 'val': 'Argentina' }, { 'val': 'Armenia' }, { 'val': 'Australia' }, { 'val': 'Austria' }, { 'val': 'Azerbaijan' }
      , { 'val': 'Bahamas' }, { 'val': 'Bahrain' }, { 'val': 'Bangladesh' }, { 'val': 'Barbados' }, { 'val': 'Belarus' }, { 'val': 'Belgium' }
      , { 'val': 'Belize' }, { 'val': 'Benin' }, { 'val': 'Bhutan' }, { 'val': 'Bolivia' }, { 'val': 'Bosnia' }, { 'val': 'Botswana' }
      , { 'val': 'Brazil' }, { 'val': 'Brunei' }, { 'val': 'Bulgaria' }, { 'val': 'Burkina' }, { 'val': 'Burundi' }, { 'val': 'CaboVerde' }
      , { 'val': 'Cambodia' }, { 'val': 'Cameroon' }, { 'val': 'Canada' }, { 'val': 'Central African Republic' }, { 'val': 'Chad' }, { 'val': 'Chile' }
      , { 'val': 'China' }, { 'val': 'Colombia' }, { 'val': 'Comoros' }, { 'val': 'Costa Rica' }, { 'val': 'CotedIvoire' }, { 'val': 'Croatia' }
      , { 'val': 'cuba' }, { 'val': 'Cyprus' }, { 'val': 'Czechia' }, { 'val': 'Denmark' }, { 'val': 'Djibouti' }, { 'val': 'Dominica' }
      , { 'val': 'Ecuador' }, { 'val': 'Egypt' }, { 'val': 'ElSalvador' }, { 'val': 'Equatorial Guinea' }, { 'val': 'Eritrea' }, { 'val': 'Estonia' }
      , { 'val': 'Eswatini' }, { 'val': 'Ethiopia' }, { 'val': 'Fiji' }, { 'val': 'Finland' }, { 'val': 'France' }, { 'val': 'Gabon' }
      , { 'val': 'Gambia' }, { 'val': 'Georgia' }, { 'val': 'Germany' }, { 'val': 'Ghana' }, { 'val': 'Greece' }, { 'val': 'Grenada' }
      , { 'val': 'Guatemala' }, { 'val': 'Guinea' }, { 'val': 'Guinea-Bissau' }, { 'val': 'Guyana' }, { 'val': 'Haiti' }, { 'val': 'Honduras' }
      , { 'val': 'Hungary' }, { 'val': 'Iceland' }, { 'val': 'India' }, { 'val': 'Indonesia' }, { 'val': 'Iran' }, { 'val': 'Iraq' }
      , { 'val': 'Ireland' }, { 'val': 'Israel' }, { 'val': 'Italy' }, { 'val': 'Jamaica' }, { 'val': 'Japan' }, { 'val': 'Jordan' }
      , { 'val': 'Kazakhstan' }, { 'val': 'Kenya' }, { 'val': 'Kiribati' }, { 'val': 'Kosovo' }, { 'val': 'Kuwait' }, { 'val': 'Kyrgyzstan' }
      , { 'val': 'Laos' }, { 'val': 'Latvia' }, { 'val': 'Lebanon' }, { 'val': 'Lesotho' }, { 'val': 'Liberia' }, { 'val': 'Libya' }
      , { 'val': 'Liechtenstein' }, { 'val': 'Lithuania' }, { 'val': 'Luxembourg' }, { 'val': 'Madagascar' }, { 'val': 'Malawi' }, { 'val': 'Malaysia' }
      , { 'val': 'Maldives' }, { 'val': 'Mali' }, { 'val': 'Malta' }, { 'val': 'Marshall Islands' }, { 'val': 'Mauritania' }, { 'val': 'Mauritius' }
      , { 'val': 'Mexico' }, { 'val': 'Micronesia' }, { 'val': 'Moldova' }, { 'val': 'Monaco' }, { 'val': 'Mongolia' }, { 'val': 'Montenegro' }
      , { 'val': 'Morocco' }, { 'val': 'Mozambique' }, { 'val': 'Myanmar' }, { 'val': 'Namibia' }, { 'val': 'Nauru' }, { 'val': 'Nepal' }
      , { 'val': 'Netherlands' }, { 'val': 'New Zealand' }, { 'val': 'Nicaragua' }, { 'val': 'Niger' }, { 'val': 'Nigeria' }, { 'val': 'North Korea' }
      , { 'val': 'North Macedonia' }, { 'val': 'Norway' }, { 'val': 'Oman' }, { 'val': 'Pakistan' }, { 'val': 'Palau' }, { 'val': 'Palestine' }
      , { 'val': 'Panama' }, { 'val': 'Papua New Guinea' }, { 'val': 'Paraguay' }, { 'val': 'Peru' }, { 'val': 'Philippines' }, { 'val': 'Portugal' }
      , { 'val': 'Qatar' }, { 'val': 'Romania' }, { 'val': 'Russia' }, { 'val': 'Rwanda' }, { 'val': 'Saint Kitts and Nevis' }, { 'val': 'Saint Lucia' }
      , { 'val': 'Samoa' }, { 'val': 'San Marino' }, { 'val': 'Sao Tome and Principe' }, { 'val': 'Saudi Arabia' }, { 'val': 'Senegal' },
      { 'val': 'Serbia' }
      , { 'val': 'Seychelles' }, { 'val': 'Sierra Leone' }, { 'val': 'Singapore' }, { 'val': 'Slovakia' }, { 'val': 'Slovenia' }, { 'val': 'Solomon Islands' }
      , { 'val': 'Somalia' }, { 'val': 'South Africa' }, { 'val': 'South Korea' }, { 'val': 'South Sudan' }, { 'val': 'Spain' }, { 'val': 'Sudan' }
      , { 'val': 'Suriname' }, { 'val': 'Sweden' }, { 'val': 'Switzerland' }, { 'val': 'Syria' }, { 'val': 'Taiwan' }, { 'val': 'Tajikistan' }
      , {
        'val': 'other'
      }
    ]
    this.eval = [
      { 'sa': 'Andhra Pradesh' }, { 'sa': 'Arunachal Pradesh' }, { 'sa': 'Assam' }, { 'sa': '	Bihar' }, { 'sa': 'Chhattisgarh' }, { 'sa': 'Goa' },
      { 'sa': '	Gujarat' }, { 'sa': 'Haryana' }, { 'sa': 'Himachal Pradesh' }, { 'sa': 'Jharkhand' }, { 'sa': 'Karnataka' }, { 'sa': '	Kerala' }, { 'sa': 'Madhya Pradesh' },
      { 'sa': '	Maharashtra' }, { 'sa': '	Manipur' }, { 'sa': 'Meghalaya' }, { 'sa': 'Mizoram' }, { 'sa': 'Nagaland' }, { 'sa': 'Odisha' }, { 'sa': 'Punjab' },
      { 'sa': '	Rajasthan' }, { 'sa': 'Sikkim' }, { 'sa': 'Tamil Nadu' }, { 'sa': 'Telangana' }, { 'sa': 'Tripura' }, { 'sa': 'Uttar Pradesh' }, { 'sa': 'Uttarakhand' }
      , { 'sa': 'West Bengal' }, { 'sa': 'other' }

    ]
    this.checked = [
      { 'ind': 'Mumbai' }, { 'ind': 'Delhi' }, { 'ind': 'Bangalore' }, { 'ind': 'Hyderabad' }, { 'ind': 'Ahmedabad' }, { 'ind': 'Chennai' }, { 'ind': 'Indore' }
      , { 'ind': 'Kolkata' }, { 'ind': 'Surat' }, { 'ind': 'Pune' }, { 'ind': 'Jaipur' }, { 'ind': 'Lucknow' }, { 'ind': 'Kanpur' }, { 'ind': 'Nagpur' }, { 'ind': 'Thane' }
      , { 'ind': 'Bhopal' }, { 'ind': 'Visakhapatnam' }, { 'ind': 'Patna' }, { 'ind': 'Vadodara' }, { 'ind': 'Ghaziabad' }, { 'ind': 'Ludhiana' }, { 'ind': 'Agra' }, { 'ind': 'Nashik' }
      , { 'ind': 'Faridabad' }, { 'ind': 'Meerut' }, { 'ind': 'Rajkot' }, { 'ind': 'Kalyan-Dombivli' }, { 'ind': 'Vasai-Virar' }, { 'ind': 'Varanasi' }, { 'ind': 'Srinagar' }, { 'ind': 'Aurangabad' }
      , { 'ind': 'Navi Mumbai' }, { 'ind': 'Allahabad' }, { 'ind': 'Howrah' }, { 'ind': 'Ranchi' }, { 'ind': 'Gwalior' }, { 'ind': 'Jabalpur' }, { 'ind': 'Amritsar' }, { 'ind': 'Dhanbad' }
      , { 'ind': 'Coimbatore' }, { 'ind': 'Gudivada' }, { 'ind': 'Aurangabad' }, { 'ind': 'Amaravati' }, { 'ind': 'Ballia' }, { 'ind': 'Hajipur' }, { 'ind': 'Madanapalle' }, { 'ind': 'Guntakal' }
      , { 'ind': 'Adoni' }, { 'ind': 'Tenali' }, { 'ind': 'Unnao' }, { 'ind': 'Bhimavaram' }, { 'ind': 'Karaikudi' }, { 'ind': 'Tadipatri' }, { 'ind': 'Suryapet' }, { 'ind': 'Phagwara' }
      , { 'ind': 'Proddatur' }, { 'ind': 'Danapur' }, { 'ind': '	Durban' }, { 'ind': 'Polokwane' }, { 'ind': '	Port Elizabeth' }, { 'ind': '	Bloemfontein' }, { 'ind': '	Johannesburg' }, { 'ind': '	Polokwane' }
      , { 'ind': 'Johannesburg' }, { 'ind': 'Kimberley' }, { 'ind': 'Klerksdorp' }, { 'ind': 'Mbombela' }
      , { 'ind': 'other' }
    ]
    this.note = [
      { 'notes': 'one week' }, { 'notes': ' 15 days' }, { 'notes': '1 month' }, { 'notes': ' 2 month' }, { 'notes': '3 month' }, { 'notes': 'other' }

    ]
  }


  preview(files) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }



  upload(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);
    this.TeamService.resumeUpload(this.fileToUpload).subscribe(res => {

    })
  }

  onFileChanged(event) {
    const file = event.target.files[0]
  }


  UploadResume() {
    // debugger;
    this.display = true;
    this.infodispaly = false;
  }
  PersonalInfo() {
    this.infodispaly = true;
    this.display = false;
  }
  onDialogClose(event) {
    this.display = event;
    this.close = true;
  }
  ngOnInit() {


    this.uploadForm = this.formBuilder.group({
      file: [''],
      secondfile: [''],
      thirdfile: ['']

    })



    this.personalInfoForm = this.formBuilder.group({
      designation: ['', Validators.required],
      firstName: ['', [Validators.required, Validators.pattern(/^\S*$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^\S*$/)]],
      email: ['', [Validators.required, Validators.email]],
      //phoneNo: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      dob: ['', Validators.required],
      expYear: ['', Validators.required],
      expMonth: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      noticePer: ['', Validators.required],
      primarySkill: ['', Validators.required],
      secondorySkill: ['', Validators.required],
      sExpYear: ['', Validators.required],
      sExpMonth: ['', Validators.required],
      identityNo: ['', Validators.required],
      idProof: ['', Validators.required],
      contact:['', Validators.required],
      countryCode:['', Validators.required],
      phone:['', Validators.required],


    })

    var email = 'dhanshri.autade3@gmail.com';
    this.TeamService.GetProfile(email).subscribe((res: any) => {
      console.log('getprofile', res);
      this.personalInfoForm.get('firstName').setValue(res.firstName);
      this.personalInfoForm.get('lastName').setValue(res.lastName);
      this.personalInfoForm.get('email').setValue(res.email);
      this.personalInfoForm.get('dob').setValue(res.dob);
      this.personalInfoForm.get('country').setValue(res.country);
      this.personalInfoForm.get('state').setValue(res.state);
      this.personalInfoForm.get('city').setValue(res.city);
      this.personalInfoForm.get('noticePer').setValue(res.noticePeriod);
      this.personalInfoForm.get('skill').setValue(res.primarySkill);
      this.personalInfoForm.get('idProof').setValue(res.idType);
      this.personalInfoForm.get('identityNo').setValue(res.idNumber);
      this.personalInfoForm.get('designation').setValue(res.designation);
      //contact
      //country code
      // residualCountry
      //secondarySkill
      //title
    })




  }

  addSkill() {
    if (this.personalInfoForm.get('primarySkill').value === '') {
       } else {
      this.skillArray.push(this.personalInfoForm.get('primarySkill').value)
    }

  }
  addsecSkill() {
    if (this.personalInfoForm.get('secondorySkill').value === '') {
      console.log('in if')
    } else {
      console.log('in else')
      this.secskillArray.push(this.personalInfoForm.get('secondorySkill').value)
    }
    //  this.secskillArray.push(this.personalInfoForm.get('secondorySkill').value)

  }

  removeSkill(i: any) {
    console.log(i)
    this.skillArray.splice(i, 1)
  }
  removesecSkill(i: any) {
    console.log(i)
    this.secskillArray.splice(i, 1)
  }


  addDocument() {
    this.docArray.push(this.personalInfoForm.get('idProof').value + this.personalInfoForm.get('identityNo').value)
    this.documentArray.push(this.personalInfoForm.get('identityNo').value)
    this.docidArray.push(this.personalInfoForm.get('idProof').value)
  }

  removeDoc(i: any) {
    console.log(i)
    this.docArray.splice(i, 1);
  }

  Details(fileInput: any) {
    for (var i = 0; i < fileInput.target.files.length; i++) {
      this.otherfileData.push(<File>fileInput.target.files[i])
    }
    //this.preview();
  }
  onUpload() {
    this.submitted = true;
    const formData = new FormData();
    formData.append('resume', this.uploadForm.value.file);
    for (var i = 0; i < this.otherfileData.length; i++) {
      formData.append('otherDocs', this.otherfileData[i]);
    }

    formData.append('docsInfo', '{"id":"ranigirnmakar@gmail.com","date":"15/03/1996"}');

    this.fileUploadProgress = '0%';

    this.http.post('http://localhost:8080/uploadDocuments', formData, {
      reportProgress: true,
      observe: 'events'   
    })
    .subscribe(events => {
      if(events.type === HttpEventType.UploadProgress) {
        this.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%';
        console.log(this.fileUploadProgress);
      } else if(events.type === HttpEventType.Response) {
        this.fileUploadProgress = 'Uploading Completed';
        console.log(events.body);          
        }
         
    }) 
  }
  onSubmit() {
    this.submitted = true;
    // console.log('mob',this.personalInfoForm.value.phone.number);
    this.value = {     

      "firstName":this.personalInfoForm.value.firstName,
      "lastName":this.personalInfoForm.value.lastName,
      "contact":this.personalInfoForm.value.phone.number,
      "countryCode":this.personalInfoForm.value.phone.dialCode,   
      "email":this.personalInfoForm.value.email,
      "designation":this.personalInfoForm.value.designation,
      "country":this.personalInfoForm.value.country,
      "state":this.personalInfoForm.value.state,
      "city":this.personalInfoForm.value.city,
      "residualCountry":"maha",
      "noticePeriod":this.personalInfoForm.value.noticePer,
      "title":"PA",
      "dob":this.personalInfoForm.value.dob,
      "idType":'adhar',
      "idNumber": '12345',
      "primarySkill":this.skillArray,
      "secondarySkill":this.secskillArray
      }
    
  
    console.log(this.value)



    this.TeamService.AddInformation(this.value).subscribe(res => {
      console.log(JSON.stringify(res))

    })
    this.markFormTouched(this.personalInfoForm);

  }

  markFormTouched(group: FormGroup | FormArray) {
    Object.keys(group.controls).forEach((key: string) => {
      const control = group.controls[key];
      if (control instanceof FormGroup || control instanceof FormArray) { control.markAsTouched(); this.markFormTouched(control); }
      else { control.markAsTouched(); };
    });
  };


  getFileDetails(event) {
    for (var i = 0; i < event.target.files.length; i++) {
      var name = event.target.files[i].name;
      var type = event.target.files[i].type;
      var size = event.target.files[i].size;
      var modifiedDate = event.target.files[i].lastModifiedDate;

      var fileType = name.split('.').pop();

      if (size <= 20000 && fileType == 'pdf' || fileType == 'docx') {

        this.valid = true;
        this.errormassage = false;
        const file = event.target.files[0];
        this.uploadForm.get('file').setValue(file);


      } else {
      this.errormassage = true;

        this.valid = false;
      }

      console.log('Name: ' + fileType + "\n" +
        'Type: ' + type + "\n" +
        'Last-Modified-Date: ' + modifiedDate + "\n" +
        'Size: ' + Math.round(size / 1024) + " KB");

    }
  }
 
  
}
