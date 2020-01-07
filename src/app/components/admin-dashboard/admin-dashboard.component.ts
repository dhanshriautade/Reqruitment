import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  datacharts: any;
  currentStatus =  true;
  display =false;
  submitted: boolean;
  notice; 
  data;
  deptartment: {}[];
  skillArray = [];
  createJobForm = new FormGroup({

  })
 constructor(private formBuilder: FormBuilder,public TeamService: TeamService) {
  this.notice = [
    { 'notes': 'one week' }, { 'notes': ' 15 days' }, { 'notes': '1 month' }, { 'notes': ' 2 month' }, { 'notes': '3 month' }, { 'notes': 'other' }
    
    ],
    this.deptartment=[{'dept':'IT' },{'dept':'Computer' },{'dept':'Meachanical' },{'dept':'ENTC' }
    ,{'dept':'Electrical' },{'dept':'Civil' },{'dept':'Electronic' }
      
   ]
    this.datacharts = {
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

   createjob(){
     this.currentStatus = false;
     this.display = true;
   }
  ngOnInit() {
    this.createJobForm = this.formBuilder.group({
      jobId: [''],
      designation: ['', Validators.required],
      experienceInYears: ['', Validators.required],
      noticePeriod: ['', Validators.required],
      minPackage:['', Validators.required],
      maxPackage:['', Validators.required],
      department:['', Validators.required],
      skills:['', Validators.required],
      jobDescription:['', Validators.required],
      relevantExpInYears:['', Validators.required],
      status:[''],
      jobStatus:[''],


    })
  
  }


  addskill() {
    this.skillArray.push(this.createJobForm.get('skills').value);
  }
  removeSkill(i: any) {
    console.log(i)
    this.skillArray.splice(i, 1);
    }
  showDialog(){
    this.display=true;
  }
  onSubmit() {
    this.submitted = true;
   
    this.data = {
      "jobId":"A008",
      "designation":this.createJobForm.value.designation,
      "experienceInYears":this.createJobForm.value.experienceInYears,
      "noticePeriod":this.createJobForm.value.noticePeriod,
      "minPackage":this.createJobForm.value.minPackage,
      "maxPackage":this.createJobForm.value.maxPackage,
      "relevantExpInYears": this.createJobForm.value.relevantExpInYears,
      "department":this.createJobForm.value.department,
      "skills":this.skillArray,
      "jobDescription":this.createJobForm.value.jobDescription,
      "status":this.createJobForm.value.status,
      "jobStatus":this.createJobForm.value.jobStatus,

      
      }
      this.TeamService.CreateJob(this.data).subscribe(res => { 
      
      });
      console.log('this is jobcreation',this.data);
   
  }

}
