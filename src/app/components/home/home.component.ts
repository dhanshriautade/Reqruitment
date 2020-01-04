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
    this.name = localStorage.getItem('name');
  }

  LogOut(){
    localStorage.clear();
    this.router.navigateByUrl('');
  }

  ngOnInit() {
  }

}
