import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  data: any;
 constructor() {
    this.data = {
      labels: ['Completed','hold','c'],
      
      datasets: [
          {
              data: [200, 150, 100],

              backgroundColor: [
                  "#37D7FF",
                  "#FF746D",
                  "#FEE37B"
              ],
              
              hoverBackgroundColor: [
                  "#37D7FF",
                  "#FF746D",
                  "#FEE37B"
              ]
          }]    
      };
   }

  ngOnInit() {
  }

}
