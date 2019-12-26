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
  valid: boolean=false;
  errormassage:boolean = false;
  val: boolean=false;
  err:boolean = false;
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


  getFileDetails (event) {
    for (var i = 0; i < event.target.files.length; i++) { 
      var name = event.target.files[i].name;
      var type = event.target.files[i].type;
      var size = event.target.files[i].size;
      var modifiedDate = event.target.files[i].lastModifiedDate;

      var fileType=name.split('.').pop();

 if(size<=20000 && fileType=='pdf'|| fileType=='docx' ){
      
        this.valid=true;
        this.errormassage = false;
        
        
      }else { this.errormassage = true;
       
        this.valid=false;
      }
      
      console.log ('Name: ' + fileType + "\n" + 
        'Type: ' + type + "\n" +
        'Last-Modified-Date: ' + modifiedDate + "\n" +
        'Size: ' + Math.round(size / 1024) + " KB");

    }
  }
  Details(event) {
    for (var i = 0; i < event.target.files.length; i++) { 
      var name = event.target.files[i].name;
      var type = event.target.files[i].type;
      var size = event.target.files[i].size;
      var modifiedDate = event.target.files[i].lastModifiedDate;

      var fileType=name.split('.').pop();

 if(size<=20000 && fileType=='pdf'|| fileType=='docx' ){
      
        this.val=true;
        this.err = false;
        
        
      }else { this.err = true;
       
        this.val=false;
      }
      
      console.log ('Name: ' + fileType + "\n" + 
        'Type: ' + type + "\n" +
        'Last-Modified-Date: ' + modifiedDate + "\n" +
        'Size: ' + Math.round(size / 1024) + " KB");

    }
  }
}
