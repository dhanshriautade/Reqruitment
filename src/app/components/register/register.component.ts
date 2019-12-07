import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';
import { map } from "rxjs/operators";
@Component({
selector: 'app-register',
templateUrl: './register.component.html',
styleUrls: ['./register.component.scss'],
preserveWhitespaces: false
})
export class RegisterComponent implements OnInit {

registerForm: FormGroup;
submitted = false;
pattern=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

form: FormGroup;
constructor(private formBuilder: FormBuilder) { }

ngOnInit() {
this.registerForm = this.formBuilder.group({
firstname:['', [Validators.required, Validators.pattern(/^\S*$/)]],
lastName: ['', [Validators.required, Validators.pattern(/^\S*$/)]],
email: ['', [Validators.required, Validators.email]],
phoneno: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
areacode:['', Validators.required],
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

// stop here if form is invalid
if (this.registerForm.invalid) {
return;
}
}
}