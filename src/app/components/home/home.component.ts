import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name;
  email: string;
  constructor(private router: Router) {
    this.email = localStorage.getItem('email');
  }

  LogOut(){
    localStorage.clear();
    this.router.navigateByUrl('');
  }

  ngOnInit() {
  }

}
