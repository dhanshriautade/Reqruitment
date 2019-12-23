import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  display = false;
  close: any;
  infodispaly =  true;
  constructor() {
    this.infodispaly =  true;
   }

  UploadResume(){
    // debugger;
    this.display = true;
    this.infodispaly =  false;
  }
  PersonalInfo(){
    this.infodispaly =  true;
    this.display = false;
  }
  onDialogClose(event) {
    this.display = event;
    this.close = true;
     }
  ngOnInit() {
  }

}
