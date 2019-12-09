import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';
import { map } from "rxjs/operators";
import { TeamService } from 'src/app/services/team.service';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    preserveWhitespaces: false
})
export class RegisterComponent implements OnInit {


    registerForm: FormGroup;
    submitted = false;
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
    constructor(private formBuilder: FormBuilder, public TeamService: TeamService) { }

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

    onSubmit() {
        this.submitted = true;


        this.data = {
            "firstName": this.registerForm.value.firstname,
            "lastName": this.registerForm.value.lastName,
            "contact": this.registerForm.value.phone.number,
            "email": this.registerForm.value.email,
            "password": this.registerForm.value.password,
            "country": this.registerForm.value.phone.dialCode,
            "reEnterPassword": this.registerForm.value.confpassword,

        }
        console.log(JSON.stringify(this.data));
        this.TeamService.SignUp(this.data).subscribe(res => {

        })
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }


    }
}