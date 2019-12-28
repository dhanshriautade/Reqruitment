import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';
import {HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEventType, HttpParams} from '@angular/common/http';

import { TeamService } from 'src/app/services/team.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  display = false;
  close: any;
  infodispaly =  true;
  selectedFile=null;
  fileToUpload: File = null;
  valid: boolean=false;
  errormassage:boolean = false;
  val: boolean=false;
  err:boolean = false;
  
  data;
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

  // foundDoc: any;
  // selectedDoc: any = [];
  // pickedDoc: any = [];
  // idcard: any = ["Adhar No.","Passport No.","PAN Card No","Driving Lincese No.","Voter ID No."];
   
  
  skillArray=[];
  secskillArray=[];
  docArray=[];
  fields: any;
  uploadForm = new FormGroup({

    file:new FormControl(['']),
    secondfile:new FormControl(['']),

  })
  personalInfoForm = new FormGroup({

  })
  
  idNo: string;
 
 
  
    constructor(private formBuilder: FormBuilder, public TeamService : TeamService,private http:HttpClient) {
      //  this.infodispaly =  true;
      

      this.infodispaly =  true;
      this.data = [
      {'num': 1},
  {'num': 2},{'num': 3},{'num': 4},{'num': 5},{'num': 6},{'num': 7},{'num': 8},{'num': 9},{'num': 10},{'num': 11},
  {'num': 12},{'num': 13},{'num':14},{'num': 15},{'num': 16},{'num': 17},{'num': 18},{'num': 19},{'num': 20},{'num': 21},
  {'num': 22},{'num': 23},{'num': 24},{'num': 25},{'num': 26},{'num': 27},{'num': 28},{'num': 29},{'num': 30},{'num': 31},
  {'num': 32},{'num': 33},{'num': 34},{'num': 35},{'num': 36},{'num': 37},{'num': 38},{'num': 39},{'num': 40},{'num': 41},
  {'num': 42},{'num': 43},{'num': 44},{'num': 45},{'num': 46},{'num': 47},{'num': 48},{'num': 48},{'num': 49},{'num': 50}
      
      ]
    
  
  this.detail=[
   {'id': 1},{'id': 2},{'id': 3},{'id': 4},{'id': 5},{'id': 6},{'id': 7},{'id': 8},{'id': 9},{'id': 10},{'id': 11}
  ]
  this.check=[
   {'val':'Afghanistan'},{'val':'Albania'},{'val':'Algeria'},{'val':'Andorra'},{'val':'Angola'}
    ,{'val':'Antigua'},{'val':'Argentina'},{'val':'Armenia'},{'val':'Australia'},{'val':'Austria'},{'val':'Azerbaijan'}
    ,{'val':'Bahamas'},{'val':'Bahrain'},{'val':'Bangladesh'},{'val':'Barbados'},{'val':'Belarus'},{'val':'Belgium'}
    ,{'val':'Belize'},{'val':'Benin'},{'val':'Bhutan'},{'val':'Bolivia'},{'val':'Bosnia'},{'val':'Botswana'}
    ,{'val':'Brazil'},{'val':'Brunei'},{'val':'Bulgaria'},{'val':'Burkina'},{'val':'Burundi'},{'val':'CaboVerde'}
    ,{'val':'Cambodia'},{'val':'Cameroon'},{'val':'Canada'},{'val':'Central African Republic'},{'val':'Chad'},{'val':'Chile'}
    ,{'val':'China'},{'val':'Colombia'},{'val':'Comoros'},{'val':'Costa Rica'},{'val':'CotedIvoire'},{'val':'Croatia'}
    ,{'val':'cuba'},{'val':'Cyprus'},{'val':'Czechia'},{'val':'Denmark'},{'val':'Djibouti'},{'val':'Dominica'}
    ,{'val':'Ecuador'},{'val':'Egypt'},{'val':'ElSalvador'},{'val':'Equatorial Guinea'},{'val':'Eritrea'},{'val':'Estonia'}
    ,{'val':'Eswatini'},{'val':'Ethiopia'},{'val':'Fiji'},{'val':'Finland'},{'val':'France'},{'val':'Gabon'}
    ,{'val':'Gambia'},{'val':'Georgia'},{'val':'Germany'},{'val':'Ghana'},{'val':'Greece'},{'val':'Grenada'}
    ,{'val':'Guatemala'},{'val':'Guinea'},{'val':'Guinea-Bissau'},{'val':'Guyana'},{'val':'Haiti'},{'val':'Honduras'}
    ,{'val':'Hungary'},{'val':'Iceland'},{'val':'India'},{'val':'Indonesia'},{'val':'Iran'},{'val':'Iraq'}
    ,{'val':'Ireland'},{'val':'Israel'},{'val':'Italy'},{'val':'Jamaica'},{'val':'Japan'},{'val':'Jordan'}
    ,{'val':'Kazakhstan'},{'val':'Kenya'},{'val':'Kiribati'},{'val':'Kosovo'},{'val':'Kuwait'},{'val':'Kyrgyzstan'}
    ,{'val':'Laos'},{'val':'Latvia'},{'val':'Lebanon'},{'val':'Lesotho'},{'val':'Liberia'},{'val':'Libya'}
    ,{'val':'Liechtenstein'},{'val':'Lithuania'},{'val':'Luxembourg'},{'val':'Madagascar'},{'val':'Malawi'},{'val':'Malaysia'}
    ,{'val':'Maldives'},{'val':'Mali'},{'val':'Malta'},{'val':'Marshall Islands'},{'val':'Mauritania'},{'val':'Mauritius'}
    ,{'val':'Mexico'},{'val':'Micronesia'},{'val':'Moldova'},{'val':'Monaco'},{'val':'Mongolia'},{'val':'Montenegro'}
    ,{'val':'Morocco'},{'val':'Mozambique'},{'val':'Myanmar'},{'val':'Namibia'},{'val':'Nauru'},{'val':'Nepal'}
    ,{'val':'Netherlands'},{'val':'New Zealand'},{'val':'Nicaragua'},{'val':'Niger'},{'val':'Nigeria'},{'val':'North Korea'}
    ,{'val':'North Macedonia'},{'val':'Norway'},{'val':'Oman'},{'val':'Pakistan'},{'val':'Palau'},{'val':'Palestine'}
    ,{'val':'Panama'},{'val':'Papua New Guinea'},{'val':'Paraguay'},{'val':'Peru'},{'val':'Philippines'},{'val':'Portugal'}
    ,{'val':'Qatar'},{'val':'Romania'},{'val':'Russia'},{'val':'Rwanda'},{'val':'Saint Kitts and Nevis'},{'val':'Saint Lucia'}
    ,{'val':'Samoa'},{'val':'San Marino'},{'val':'Sao Tome and Principe'},{'val':'Saudi Arabia'},{'val':'Senegal'},
    {'val':'Serbia'}
   , {'val':'Seychelles'},{'val':'Sierra Leone'},{'val':'Singapore'},{'val':'Slovakia'},{'val':'Slovenia'},{'val':'Solomon Islands'}
   , {'val':'Somalia'},{'val':'South Africa'},{'val':'South Korea'},{'val':'South Sudan'},{'val':'Spain'},{'val':'Sudan'}
   , {'val':'Suriname'},{'val':'Sweden'},{'val':'Switzerland'},{'val':'Syria'},{'val':'Taiwan'},{'val':'Tajikistan'}
  //  , {'val':'Tanzania'},{'val':'Thailand'},{'val':'Timor-Leste'},{'val':'Togo'},{'val':'Tonga'},{'val':'Trinidad and Tobago'}
  //  , {'val':'Tunisia'},{'val':'Turkey'},{'val':'Turkmenistan'},{'val':'Tuvalu'},{'val':'Uganda'},{'val':'Ukraine'}
  //  , {'val':'United Arab Emirates'},{'val':'United Kingdom'},{'val':'United States of America'},{'val':'Uruguay'},{'val':'Uzbekistan'},{'val':'Vanuatu'}
  //  , {'val':'Vatican City'},{'val':'Venezuela'},{'val':'Vietnam'},{'val':'Yemen'},{'val':'Zambia'},{'val':'Zimbabwe'},
   ,{'val':'other'}
  ]
  this.eval=[
 {'sa':'Andhra Pradesh'},{'sa':'Arunachal Pradesh'},{'sa':'Assam'},{'sa':'	Bihar'},{'sa':'Chhattisgarh'},{'sa':'Goa'},
  {'sa':'	Gujarat'},{'sa':'Haryana'},{'sa':'Himachal Pradesh'},{'sa':'Jharkhand'},{'sa':'Karnataka'},{'sa':'	Kerala'},{'sa':'Madhya Pradesh'},
  {'sa':'	Maharashtra'},{'sa':'	Manipur'},{'sa':'Meghalaya'},{'sa':'Mizoram'},{'sa':'Nagaland'},{'sa':'Odisha'},{'sa':'Punjab'},
  {'sa':'	Rajasthan'},{'sa':'Sikkim'},{'sa':'Tamil Nadu'},{'sa':'Telangana'},{'sa':'Tripura'},{'sa':'Uttar Pradesh'},{'sa':'Uttarakhand'}
  ,{'sa':'West Bengal'},{'sa':'other'} 
    
  ]
  this.checked=[
    {'ind':'Mumbai'},{'ind':'Delhi'},{'ind':'Bangalore'},{'ind':'Hyderabad'},{'ind':'Ahmedabad'},{'ind':'Chennai'},{'ind':'Indore'}
    ,{'ind':'Kolkata'},{'ind':'Surat'},{'ind':'Pune'},{'ind':'Jaipur'},{'ind':'Lucknow'},{'ind':'Kanpur'},{'ind':'Nagpur'},{'ind':'Thane'}
    ,{'ind':'Bhopal'},{'ind':'Visakhapatnam'},{'ind':'Patna'},{'ind':'Vadodara'},{'ind':'Ghaziabad'},{'ind':'Ludhiana'},{'ind':'Agra'},{'ind':'Nashik'}
    ,{'ind':'Faridabad'},{'ind':'Meerut'},{'ind':'Rajkot'},{'ind':'Kalyan-Dombivli'},{'ind':'Vasai-Virar'},{'ind':'Varanasi'},{'ind':'Srinagar'},{'ind':'Aurangabad'}
    ,{'ind':'Navi Mumbai'},{'ind':'Allahabad'},{'ind':'Howrah'},{'ind':'Ranchi'},{'ind':'Gwalior'},{'ind':'Jabalpur'},{'ind':'Amritsar'},{'ind':'Dhanbad'}
    ,{'ind':'Coimbatore'},{'ind':'Gudivada'},{'ind':'Aurangabad'},{'ind':'Amaravati'},{'ind':'Ballia'},{'ind':'Hajipur'},{'ind':'Madanapalle'},{'ind':'Guntakal'}
    ,{'ind':'Adoni'},{'ind':'Tenali'},{'ind':'Unnao'},{'ind':'Bhimavaram'},{'ind':'Karaikudi'},{'ind':'Tadipatri'},{'ind':'Suryapet'},{'ind':'Phagwara'}
   , {'ind':'Proddatur'},{'ind':'Danapur'},{'ind':'	Durban'},{'ind':'Polokwane'},{'ind':'	Port Elizabeth'},{'ind':'	Bloemfontein'},{'ind':'	Johannesburg'},{'ind':'	Polokwane'}
    ,{'ind':'Johannesburg'},{'ind':'Kimberley'},{'ind':'Klerksdorp'},{'ind':'Mbombela'}
    ,{'ind':'other'}
  ]
  this.note=[
    {'notes':'one week'},{'notes':' 15 days'},{'notes':'1 month'},{'notes':' 2 month'},{'notes':'3 month'},{'notes':'other'}
  
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
  


    upload(files: FileList){
      this.fileToUpload = files.item(0);
      console.log(this.fileToUpload);
      this.TeamService.resumeUpload(this.fileToUpload).subscribe(res => {
           
      })
    }
   
    onFileChanged(event) {
      const file = event.target.files[0]
    }
   
      
  UploadResume(){
    // debugger;
    this.display = true;
    this.infodispaly =  false;
  }
  PersonalInfo(){
    this.infodispaly =  true;
    this.display = false;
  }
  onDialogClose(event) {
    this.display = event;
    this.close = true;
     }
  ngOnInit() {



    // let params = new HttpParams();
    // params = params.append('email', 'gaurav@gmail.com');

    // this.http.get('http://localhost:8080/getprofile',{
    //   params:params
    // })
    // .subscribe((response:any)=>{
    //   console.log(JSON.stringify(response));
    // })


    this.uploadForm=this.formBuilder.group({
      file:[''],
      secondfile:[''],
      thirdfile:['']
    
    })
    


    this.personalInfoForm = this.formBuilder.group({
      designation: ['', Validators.required],
      firstName: ['', [Validators.required, Validators.pattern(/^\S*$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^\S*$/)]],
      email: ['', [Validators.required, Validators.email]],
      //phoneNo: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      dob: ['', Validators.required],
      expYear  :['', Validators.required],
      expMonth :['', Validators.required],
      country :['',Validators.required],
      state   :['',Validators.required],
      city    :['',Validators.required],
      noticePer:['',Validators.required],
      skill:['',Validators.required],
      secSkill:['',Validators.required],
      sExpYear:['',Validators.required],
      sExpMonth:['',Validators.required],
      identityNo:['',Validators.required],
      idProof:['',Validators.required],
      

    })

    var email = 'dhanshri.autade3@gmail.com';
    this.TeamService.GetProfile(email).subscribe((res:any) => {
      console.log('getprofile',res);
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
  addsecSkill(){
    this.secskillArray.push(this.personalInfoForm.get('secSkill').value)
  }
  addSkill(){
    this.skillArray.push(this.personalInfoForm.get('skill'). value)

  }
  removeSkill(i:any){
console.log(i)
this.skillArray.splice(i,1)
  }
  removesecSkill(i:any){
    console.log(i)
    this.secskillArray.splice(i,1)
      }
 

  addDocument(){
   

    this.docArray.push(this.personalInfoForm.get('idProof').value+this.personalInfoForm.get('identityNo').value)
 
  }
  removeDoc(i:any){
    console.log(i)
    this.docArray.splice(i,1);
    }
    onUpload(){
      this.submitted = true;
      // console.log(this.uploadForm.value);
      this.data = {
        id: 'dhanashri.autade3@gmail.com',
        date:'20/11/2019'
      }
      const formData = new FormData();
    
      formData.append('resume', this.uploadForm.value.file);
      formData.append('otherDocs', this.uploadForm.value.secondfile);
      formData.append('docsInfo', this.data);
      
     
      this.TeamService.resumeUpload(formData).subscribe(res => {
         
      })
    }
  onSubmit() {
  //  this.personalInfoForm.get('firstName').setValue('sandeep')
  this.submitted = true;
  console.log('add skill',this.skillArray);
  this.personalInfoForm.patchValue(
    {
      skill: this.skillArray,
    }

  )
  console.log('add secSkill',this.secskillArray);
  this.personalInfoForm.patchValue(
    {
      secSkill: this.secskillArray,
    }

  )

  console.log('add idProof',this.docArray);
  this.personalInfoForm.patchValue(
    {
      idProof: this.docArray,
    }

  )
  console.log('add identityNo',this.docArray);
  this.personalInfoForm.patchValue(
    {
      identityNo: this.docArray,
    }

  )
  console.log(this.personalInfoForm.value)
    this.markFormTouched(this.personalInfoForm);
    
  }
  markFormTouched(group: FormGroup | FormArray) {
    Object.keys(group.controls).forEach((key: string) => {
      const control = group.controls[key];
      if (control instanceof FormGroup || control instanceof FormArray) { control.markAsTouched(); this.markFormTouched(control); }
      else { control.markAsTouched(); };
    });
  };


  getFileDetails (event) {
    for (var i = 0; i < event.target.files.length; i++) { 
      var name = event.target.files[i].name;
      var type = event.target.files[i].type;
      var size = event.target.files[i].size;
      var modifiedDate = event.target.files[i].lastModifiedDate;

      var fileType=name.split('.').pop();

 if(size<=20000 && fileType=='pdf'|| fileType=='docx' ){
      
        this.valid=true;
        this.errormassage = false;
        const file = event.target.files[0];
        this.uploadForm.get('file').setValue(file);
        
        
      }else { this.errormassage = true;
       
        this.valid=false;
      }
      
      console.log ('Name: ' + fileType + "\n" + 
        'Type: ' + type + "\n" +
        'Last-Modified-Date: ' + modifiedDate + "\n" +
        'Size: ' + Math.round(size / 1024) + " KB");

    }
  }
  Details(event) {
    for (var i = 0; i < event.target.files.length; i++) { 
      var name = event.target.files[i].name;
      var type = event.target.files[i].type;
      var size = event.target.files[i].size;
      var modifiedDate = event.target.files[i].lastModifiedDate;

      var fileType=name.split('.').pop();

 if(size<=20000 && fileType=='pdf'|| fileType=='docx' ){
      
        this.val=true;
        this.err = false;
        const file = event.target.files[0];
        this.uploadForm.get('secondfile').setValue(file);

        
        
      }else { this.err = true;
       
        this.val=false;
      }
      
      console.log ('Name: ' + fileType + "\n" + 
        'Type: ' + type + "\n" +
        'Last-Modified-Date: ' + modifiedDate + "\n" +
        'Size: ' + Math.round(size / 1024) + " KB");

    }
  }
}
