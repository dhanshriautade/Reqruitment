import { Component, OnInit } from '@angular/core';

import { TeamService } from 'src/app/services/team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name;
  email: string;
  notificationData;
  constructor(private router: Router,public TeamService: TeamService) {
    this.name = localStorage.getItem('name');
  }

  LogOut(){
    localStorage.clear();
    this.router.navigateByUrl('');
  }

  ngOnInit() {
    this.TeamService.getNotification().subscribe((res:any) => { 
      this.notificationData = res.finalNotificationResponse;
      console.log('log',res);
    })
  }

}
