import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 public resolved(captchaResponse:string){
    console.log('Resolved captcha with response ${captchaResponse}:');
  }

  constructor() { }

  ngOnInit() {
  }

}
