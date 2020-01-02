import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormArray} from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';
import { map } from "rxjs/operators";
import { TeamService } from 'src/app/services/team.service';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    preserveWhitespaces: false
})
export class RegisterComponent implements OnInit {


    registerForm: FormGroup;
    submitted = false;
    spinner= false;
    data;
    pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    separateDialCode = true;
    SearchCountryField = SearchCountryField;
    TooltipLabel = TooltipLabel;
    CountryISO = CountryISO;
    preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
    phoneForm = new FormGroup({

    });
    form: FormGroup;
    constructor(private formBuilder: FormBuilder,public router: Router,private toastr: ToastrService, public TeamService: TeamService) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstname: ['', [Validators.required, Validators.pattern(/^\S*$/)]],
            lastName: ['', [Validators.required, Validators.pattern(/^\S*$/)]],
            email: ['', [Validators.required, Validators.email]],
            //phoneno: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
            // areacode:['', Validators.required],
            phone: ['', Validators.required],
            password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
            confpassword: ['', Validators.required]
        },
            {
                validator: MustMatch('password', 'confpassword')
            }
        );
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }


    onKey(event: any) { // without type info
        this.data = {
            "firstName": "",
            "lastName": "",
            "contact": "",
            "email": event.target.value,
            "password": "",
            "country": "",
            "reEnterPassword": ""
        }
        
        this.TeamService.AlreadyUse(this.data).subscribe(res => {
            console.log(res);

        })
    }
    onSubmit() {
        this.submitted = true;
      
        this.markFormTouched(this.registerForm);
        this.data = {
            "firstName": this.registerForm.value.firstname,
            "lastName": this.registerForm.value.lastName,
            "contact": this.registerForm.value.phone.number,
            "email": this.registerForm.value.email,
            "password": this.registerForm.value.password,
            "countryCode": this.registerForm.value.phone.dialCode,
            "reEnterPassword": this.registerForm.value.confpassword,

        }
       
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
           
        }else{    
            this.spinner = true;  
            this.TeamService.SignUp(this.data).subscribe((res : any) => {
                console.log(res);
               if(res.code === '200' || res.code === 200  ){
                this.toastr.success('Successfully Created !!!');
                this.router.navigateByUrl('/login');
          
               }
            })

            this.registerForm.reset();
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