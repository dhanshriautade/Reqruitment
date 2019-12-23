import { Component, OnInit } from '@angular/core';
import {HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEventType} from '@angular/common/http';

import { TeamService } from 'src/app/services/team.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  display = false;
  close: any;
  infodispaly =  true;
  fileToUpload: File = null;
  constructor(public TeamService: TeamService) {
    this.infodispaly =  true;
   }

   upload(files: FileList){
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);
    this.TeamService.resumeUpload(this.fileToUpload).subscribe(res => {
         
    })

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
