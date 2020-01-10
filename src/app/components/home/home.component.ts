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
  display=false;
  role: string;
  constructor(private router: Router,public TeamService: TeamService) {
    this.name = localStorage.getItem('name');
    this.role = localStorage.getItem('role');

  }

  LogOut(){
    localStorage.clear();
    this.router.navigateByUrl('');
  }
  viewProfile(){
    this.display=true;
  }

  goToPath(){

    if(this.role === '1'){
      this.router.navigateByUrl('/main/Admin/Dashboard');

    }
    else{
      this.router.navigateByUrl('/main');
    }
    
  }



  ngOnInit() {
    this.TeamService.getNotification().subscribe((res:any) => { 
      this.notificationData = res.finalNotificationResponse;
      console.log('log',res);
    })
  }

}
