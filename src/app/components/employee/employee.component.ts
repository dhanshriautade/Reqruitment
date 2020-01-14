import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';
import { HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEventType, HttpParams } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { TeamService } from 'src/app/services/team.service';
import { ToastrService } from 'ngx-toastr';
@Component({
selector: 'app-employee',
templateUrl: './employee.component.html',
styleUrls: ['./employee.component.scss'],
providers: [DatePipe],
preserveWhitespaces: false
})
export class EmployeeComponent implements OnInit {
display = false;
close: any;
myDate = new Date();
otherfileData: File[] = [];
infodispaly = true;
fileUploadProgress: string = null;
selectedFile = null;
fileToUpload: File = null;
valid: boolean = false;
errormassage: boolean = false;
val: boolean = false;
passport;
panCard;
voterId;
drivingLincese;
err: boolean = false;
MyArrayType = [];
sent_data;
docidArraysent;
data;
value;
detail;
docidArraysentarry;
check;
spinner = false;
eval;
checked;
adharCard;
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
countryState: any = [];
stateCity:any=[];
locationList:any=[];
locationCityList: any=[];
uploadForm = new FormGroup({

file: new FormControl(['']),
secondfile: new FormControl(['']),

})
personalInfoForm = new FormGroup({

})

idNo: string;
primarySkill: any;
email_id;
showDocArray: any=[];



constructor(private formBuilder: FormBuilder, private datePipe: DatePipe, private toastr: ToastrService, public TeamService: TeamService, private http: HttpClient) {
// this.infodispaly = true;
this.email_id = localStorage.getItem('email');
//console.log('this is email',this.email_id);
//var email = 'dhanshri.autade3@gmail.com';
// this.TeamService.GetProfile(email).subscribe(res => {
// console.log('getprofile', res);
// this.personalInfoForm.value.firstName = res.


// })

this.countryState = [["Afghanistan",["Bamyan","Faryab"]],["Albania",[""]],["Algeria",[""]],["Andorra",[""]],["Angola",[""]],
["Antigua",[""]],["Argentina",[""]],["Armenia",[""]],["Australia",[""]],["Austria",[""]],["Azerbaijan",[""]],
["Bahamas",[""]],["Bahrain",[""]],["Bangladesh",[""]],["Barbados",[""]],["Belarus",[""]],["Belgium",[""]],
["Belize",[""]],["Benin",[""]],["Bhutan",[""]],["Bolivia",[""]],["Bosnia",[""]],["Botswana",[""]],
["Brazil",[""]],["Brunei",[""]],["Bulgaria",[""]],["Burkina",[""]],["Burundi",[""]],["CaboVerde",[""]],
["Cambodia",[""]],["Cameroon",[""]],["Canada",[""]],["Central African Republic",[""]],["Chad",[""]],["Chile",
[""]],["China",["Hefei","Shanghai Municipality","Hunan Province"]],["Colombia",[""]],["Comoros",[""]],["Costa Rica",[""]],["CotedIvoire",[""]],["Croatia",[""]],
["cuba",[""]],["Cyprus",[""]],["Czechia",[""]],["Denmark",[""]],["Djibouti",[""]],["Dominica",[""]],["Ecuador",[""]],
["Egypt",[""]],["ElSalvador",[""]],["Equatorial Guinea",[""]],["Eritrea",[""]],["Estonia",[""]],["Eswatini",[""]],
["Ethiopia",[""]],["Fiji",[""]],["Finland",[""]],["France",[""]],["Gabon",[""]],["Gambia",[""]],["Georgia",[""]],
["Germany",["Bavaria","Berlin","Brandenburg","Thuringia"]],["Ghana",[""]],["Greece",[""]],["Grenada",[""]],["Guatemala",[""]],["Guinea",[""]],["Guinea-Bissau",
[""]],["Guyana",[""]],["Haiti",[""]],["Honduras",[""]],["Hungary",[""]],["Iceland",[""]],
  ['India', ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh",
"Goa","Gujrat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala", "Maharastra","Manipur","Meghalaya","Mizoram",
"Nagaland","Madhya Pradesh","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura",
"Uttar Pradesh","Uttarakhand","West Bengal"]],
["Indonesia",[""]],["Iran",[""]],["Iraq",[""]],["Ireland",[""]],["Israel",[""]],["Italy",[""]],
["Jamaica",[""]],["Japan",[""]],["Jordan",[""]],["Kazakhstan",[""]],["Kenya",[""]],["Kiribati",
[""]],["Kosovo",[""]],["Kuwait",[""]],["Kyrgyzstan",[""]],["Laos",[""]],["Latvia",[""]],["Lebanon",[""]],
["Lesotho",[""]],["Liberia",[""]],["Libya",[""]],["Liechtenstein",[""]],["Lithuania",[""]],
["Luxembourg",[""]],["Madagascar",[""]],["Malawi",[""]],["Malaysia",[""]],["Maldives",[""]],["Mali",[""]],
["Malta",[""]],["Marshall Islands",[""]],["Mauritania",[""]],["Mauritius",[""]],["Mexico",[""]],
["Micronesia",[""]],["Moldova",[""]],["Monaco",[""]],["Mongolia",[""]],["Montenegro",[""]],
["Morocco",[""]],["Mozambique",[""]],["Myanmar",[""]],["Namibia",[""]],["Nauru",[""]],["Nepal",[""]],
["Netherlands",[""]],["New Zealand",[""]],["Nicaragua",[""]],["Niger",[""]],["Nigeria",[""]],["North Korea",[""]],
["North Macedonia",[""]],["Norway",[""]],["Oman",[""]],["Pakistan",[""]],["Palau",[""]],["Palestine",[""]],
["Seychelles",[""]],["Sierra Leone",[""]],["Singapore",[""]],["Slovakia",[""]],["Slovenia",[""]],["Solomon Islands",
[""]],["Somalia",[""]],["South Africa",[""]],["South Korea",[""]],["South Sudan",[""]],["Spain",[""]],["Sudan",[""]],
["Suriname",[""]],["Sweden",[""]],["Switzerland",[""]],["Syria",[""]],["Taiwan",[""]],["Tajikistan",[""]],["Serbia",
[""]]
];


this.stateCity = [["Andhra Pradesh",["Visakhapatnam","Vijayawada","Guntur","Rajahmundry","Nellore","Kakinada","Kurnool",
"Tirupati","Eluru","Ongole","Anantapur","Vizianagaram","Tenali","Proddatur","Adoni","Nandyal","Madanapalle",
"Machilipatnam","Chittoor","Hindupur","Bhimavaram","Srikakulam","Anakapalle","Amaravati","Kavali"]],["Arunachal Pradesh",["Itanagar"]],
["Assam",["Dhuburi","Dibrugarh","Dispur","Guwahati","Jorhat","Nagaon","Sibsagar","Silchar","Tezpur","Tinsukia"]],
["Bihar",["Ara","Baruni","Begusarai","Bettiah","Bhagalpur","Bihar Sharif","Bodh Gaya","Buxar","Chapra","Darbhanga",
"Dehri","Dinapur Nizamat","Gaya","Hajipur","Jamalpur","Katihar","Madhubani","Motihari","Munger","Muzaffarpur","Patna",
"Purnia","Pusa","Samastipur","Siwan"]],["Chhattisgarh",["Ambikapur","Bhilai","Bilaspur","Dhamtari","Durg",
"Jagdalpur","Raipur","Rajnandgaon"]],["Goa",["Madgaon","Panaji"]],["Gujrat",["Ahmedabad","Surat","Vadodara","Rajkot",
"Bhavnagar","Jamnagar","Junagadh","Anand","Navsari","Surendranagar","Morvi","Gandhidham","Nadiad","Bharuch","Porbandar"]],
["Haryana",["Ambala","Bhiwani","Chandigarh","Faridabad","Firozpur Jhirka","Gurgaon","Hansi","Hisar","Jind",
"Kaithal","Karnal","Kurukshetra","Panipat","Pehowa","Rewari","Rohtak","Sirsa","Sonipat"]],["Himachal Pradesh",["Bilaspur","Chamba",
"Dalhousie","Dharmshala","Hamirpur","Kangra","Kullu","Mandi","Nahan","Shimla","Una"]],["Jharkhand",["Bokaro",
"Chaibasa","Deoghar","Dhanbad","Dumka","Giridih","Hazaribag","Jamshedpur","Jharia","Rajmahal","Ranchi","Saraikela"]],
["Karnataka",["Badami","Ballari","Bangalore","Belgavi","Bhadravati","Bidar","Chikkamagaluru","Chitradurga",
"Davangere","Halebid","Hassan","Kalaburagi","Kolar","Madikeri","Mandya","Mangaluru","Mysuru","Raichur",
"Shivamogga","Tumkuru"]],["Kerala",["Alappuzha","Badagara","Idukki","Kannur","Kochi","Kollam","Kottayam","Kozhikode",
"Mattancheri","Palakkad","Thalassery","Thiruvananthapuram"]],["Maharastra",["Pune","Nagpur","A.Nagar","Nashik","Palghar",
"Aurangabad","Solapur","Amravati","Jalgaon","Nashik","Kolhapur","Nanded","Sangli","Thane","Akola","Latur"]],
["Manipur",["Imphal"]],["Meghalaya",["Cherrapunji","Shillong","Mizoram","Aizawl","Lunglei"]],["Mizoram",["Aizawl",
"Serchhip","Lunglei","Saiha","Darlawn","Thenzawl","Tualbung","Tuipang","Ainak","Chhimluang","Chiahpui","Durtlang",
"Farkawn","Hmawngzawl","Hmundo"]],["Nagaland",["Kohima","Mon","Phek","Wokha","Zunheboto"]],["Madhya Pradesh",["Balaghat",
"Barwani","Betul","Bharhut","Bhind","Bhojpur","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Datia",
"Dewas","Dhar","Guna","Gwalior","Hoshangabad","Indore","Itarsi","Jabalpur","Jhabua","Khajuraho","Khandwa",
"Khargon","Maheshwar","Mandla","Mandsaur","Mhow","Narsimhapur","Narwar","Neemuch","Nowgong","Orchha","Panna",
"Raisen","Rajgarh","Ratlam","Rewa","Sagar","Sarangpur","Satna","Sehore","Seoni","Shahdol","Shajapur","Sheopur","Shivpuri"]],
["Bavaria",["	Nuremberg","	Munich"]],["Thuringia",["jena","Gera"]],["Berlin",["berlin"]],["Brandenburg",["	Potsdam","	Cottbus"]],
["Shanghai",["Hangzhou","Suzhou","Ningbo"]],["Hunan",["Chenzhou‎","Changsha‎"]],["Bamyan",["Meymaneh","Andkhvoy"]],
["Faryab",["Abdal"]]];


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
 , { 'val': 'Seychelles' }, { 'val': 'Sierra Leone' }, { 'val': 'Singapore' }, { 'val': 'Slovakia' }, { 'val': 'Slovenia' }, { 'val': 'Solomon Islands' }
 , { 'val': 'Somalia' }, { 'val': 'South Africa' }, { 'val': 'South Korea' }, { 'val': 'South Sudan' }, { 'val': 'Spain' }, { 'val': 'Sudan' }
 , { 'val': 'Suriname' }, { 'val': 'Sweden' }, { 'val': 'Switzerland' }, { 'val': 'Syria' }, { 'val': 'Taiwan' }, { 'val': 'Tajikistan' }
 ,{ 'val': 'Serbia' }
 ]
this.eval = [
{ 'sa': 'Andhra Pradesh' }, { 'sa': 'Arunachal Pradesh' }, { 'sa': 'Assam' }, { 'sa': ' Bihar' }, { 'sa': 'Chhattisgarh' }, { 'sa': 'Goa' },
{ 'sa': ' Gujarat' }, { 'sa': 'Haryana' }, { 'sa': 'Himachal Pradesh' }, { 'sa': 'Jharkhand' }, { 'sa': 'Karnataka' }, { 'sa': ' Kerala' }, { 'sa': 'Madhya Pradesh' },
{ 'sa': ' Maharashtra' }, { 'sa': ' Manipur' }, { 'sa': 'Meghalaya' }, { 'sa': 'Mizoram' }, { 'sa': 'Nagaland' }, { 'sa': 'Odisha' }, { 'sa': 'Punjab' },
{ 'sa': ' Rajasthan' }, { 'sa': 'Sikkim' }, { 'sa': 'Tamil Nadu' }, { 'sa': 'Telangana' }, { 'sa': 'Tripura' }, { 'sa': 'Uttar Pradesh' }, { 'sa': 'Uttarakhand' }
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
, { 'ind': 'Proddatur' }, { 'ind': 'Danapur' }, { 'ind': ' Durban' }, { 'ind': 'Polokwane' }, { 'ind': ' Port Elizabeth' }, { 'ind': ' Bloemfontein' }, { 'ind': ' Johannesburg' }, { 'ind': ' Polokwane' }
, { 'ind': 'Johannesburg' }, { 'ind': 'Kimberley' }, { 'ind': 'Klerksdorp' }, { 'ind': 'Mbombela' }
, { 'ind': 'other' }
]
this.note = [
{ 'notes': 'one week' }, { 'notes': ' 15 days' }, { 'notes': '1 month' }, { 'notes': ' 2 month' }, { 'notes': '3 month' }, { 'notes': 'other' }

]
}

getCountryLocationList() {
    let dept = this.personalInfoForm.get('country').value;
    let map = new Map(this.countryState);

    for (let entry of map.entries()) {
      if (dept === entry[0]) {
        this.locationList = entry[1];
        
      }
    }
  }
  getStateLocationList(){
    let city = this.personalInfoForm.get('state').value;
    let map = new Map(this.stateCity);

    for (let entry of map.entries()) {
      if (city === entry[0]) {
        this.locationCityList = entry[1];
      }
    }

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


onFileChanged(event) {
const file = event.target.files[0]
}


UploadResume() {
// debugger;
this.getCandidateDocumentsList();
    
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
code:['', Validators.required],
phone:['', Validators.required],
title:['', Validators.required],


})

var email = this.email_id;

this.getProfileEmployee();


}


getProfileEmployee(){
    var email = this.email_id;
    this.TeamService.GetProfile(email).subscribe((res: any) => {

        if(res.primarySkill != '' && res.primarySkill != null){
        for(var i=0; i<res.primarySkill.length;i++)
        {
        this.skillArray.push(res.primarySkill[i]);
        }
        
        }
        if(res.secondarySkill != '' && res.secondarySkill != null ){
        for(var i=0; i<res.secondarySkill.length;i++)
        {
        this.secskillArray.push(res.secondarySkill[i]);
        }
        
        }
        if(res.idproof !='' &&  res.idproof != null){
          let keys = Object.keys(res.idproof[0]);
       
        for(var i=0;i<keys.length;i++){
          var arr = res.idproof[0];
          if(arr[keys[i]] != null){
          this.docArray.push(keys[i]+' : ' + arr[keys[i]] )
          }
        }
      
        }
       console.log('getprofile',res);
       this.locationList.push(res.state);
       this.locationCityList.push(res.city);
        this.personalInfoForm.get('firstName').setValue(res.firstName);
        this.personalInfoForm.get('lastName').setValue(res.lastName);
        this.personalInfoForm.get('email').setValue(res.email);
        this.personalInfoForm.get('dob').setValue(res.dob);
        this.personalInfoForm.get('country').setValue(res.country);
        this.personalInfoForm.get('state').setValue(res.state);
        this.personalInfoForm.get('city').setValue(res.city);
        this.personalInfoForm.get('noticePer').setValue(res.noticePeriod);
        this.personalInfoForm.get('primarySkill').setValue(res.primarySkill);
        this.personalInfoForm.get('secondorySkill').setValue(res.secondarySkill);
        this.personalInfoForm.get('idProof').setValue(res.idproof);
        this.personalInfoForm.get('identityNo').setValue('');
        this.personalInfoForm.get('designation').setValue(res.designation);
        this.personalInfoForm.get('sExpYear').setValue(res.sExpYear);
        this.personalInfoForm.get('sExpMonth').setValue(res.sExpMonth);
        this.personalInfoForm.get('phone').setValue(res.contact);
        
        this.personalInfoForm.get('expYear').setValue(res.totalExperienceInYear);
        this.personalInfoForm.get('expMonth').setValue(res.totalExperienceInMonth);
        this.personalInfoForm.get('title').setValue(res.title);
      
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

} else {
this.secskillArray.push(this.personalInfoForm.get('secondorySkill').value)
}

}

removeSkill(i: any) {
console.log(i)
this.skillArray.splice(i, 1)
}
removesecSkill(i: any) {
console.log(i)
this.secskillArray.splice(i, 1)
}
// if (this.documentArray.includes(this.personalInfoForm.get('identityNo').value) === false)
addDocument() {
if (this.personalInfoForm.get('identityNo').value === '') {
}else{
   
this.documentArray.push(this.personalInfoForm.get('identityNo').value)
}
if (this.personalInfoForm.get('idProof').value === '') {
}else{
this.docidArray.push(this.personalInfoForm.get('idProof').value)
this.docArray.push(this.personalInfoForm.get('idProof').value + this.personalInfoForm.get('identityNo').value)
}

if(this.docidArray.length != null){
if(this.personalInfoForm.get('idProof').value === 'adharCard No.')
{
this.adharCard = this.personalInfoForm.get('identityNo').value;
}
if(this.personalInfoForm.get('idProof').value === 'Passport No.')
{
this.passport = this.personalInfoForm.get('identityNo').value;

}
if(this.personalInfoForm.get('idProof').value === 'PAN Card No.')
{
this.panCard = this.personalInfoForm.get('identityNo').value;

}
if(this.personalInfoForm.get('idProof').value === 'Driving Lincese No.')
{
this.drivingLincese = this.personalInfoForm.get('identityNo').value;

}
if(this.personalInfoForm.get('idProof').value === 'Voter ID No.')
{
this.voterId = this.personalInfoForm.get('identityNo').value;

}
}

this.docidArraysent = [
{
"adharCard" : this.adharCard,
"passport" : this.passport,
"panCard" : this.panCard,
"drivingLincese" : this.drivingLincese,
"voterId" : this.voterId
}
]


for(var i=0 ; i< this.docidArraysent.length ; i++)
{
     console.log(this.docidArraysent[0].i);
     if(this.docidArraysent[i] != undefined){
         this.docidArraysentarry.push(this.docidArraysent[i])
     }

}
console.log('this array',this.docidArraysentarry);

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
var myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

this.submitted = true;
this.spinner=true;
const formData = new FormData();
formData.append('resume', this.fileToUpload);
for (var i = 0; i < this.otherfileData.length; i++) {
formData.append('otherDocs', this.otherfileData[i]);
}
this.sent_data = {
"id":this.email_id,
"date":myDate
}
console.log(this.sent_data);
formData.append('docsInfo',JSON.stringify(this.sent_data) );

this.fileUploadProgress = '0%';
this.http.post('http://localhost:8081/uploadDocuments', formData, {
reportProgress: true,
observe: 'events'
})
.subscribe(events => {
this.spinner = false;
this.toastr.success('Successfully uploaded resume !!!');
if(events.type === HttpEventType.UploadProgress) {
this.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%';
console.log(this.fileUploadProgress);
} else if(events.type === HttpEventType.Response) {
this.fileUploadProgress = 'Uploading Completed';
console.log(events.body);

}

})
this.markFormTouched(this.uploadForm);
this.uploadForm.reset();
}
onSubmit() {
this.submitted = true;

this.spinner = true;
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
"totalExperienceInMonth":this.personalInfoForm.value.expMonth,
"totalExperienceInYear":this.personalInfoForm.value.expYear,
"noticePeriod":this.personalInfoForm.value.noticePer,
"title":this.personalInfoForm.value.title,
"dob":this.personalInfoForm.value.dob,
"idproof": this.docidArraysent,
"primarySkill":this.skillArray,
"secondarySkill":this.secskillArray


}

this.TeamService.AddInformation(this.value).subscribe(res => {
console.log(JSON.stringify(res))
this.spinner = false;
this.toastr.success('Successfully created Employee !!!');
this.getProfileEmployee();


})
this.markFormTouched(this.personalInfoForm);

this.personalInfoForm.reset();




}
documentsList: any = {};
    getCandidateDocumentsList() {
        let body = new FormData();
        body.append('id', this.email_id);
        this.http.post('http://localhost:8081/getCandidateById', body).subscribe(response => {
            this.documentsList = response;
           });
    }

markFormTouched(group: FormGroup | FormArray) {
Object.keys(group.controls).forEach((key: string) => {
const control = group.controls[key];
if (control instanceof FormGroup || control instanceof FormArray) { control.markAsTouched(); this.markFormTouched(control); }
else { control.markAsTouched(); };
});
};


getFileDetails(event : any) {

this.fileToUpload = <File>event.target.files[0];
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