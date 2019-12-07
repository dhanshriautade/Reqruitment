import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  display = false;
  close: any;
  constructor() { }

  showDialog(){
    // debugger;
    this.display = true;
  }

  onDialogClose(event) {
    this.display = event;
    this.close = true;
     }
  ngOnInit() {
  }

}
