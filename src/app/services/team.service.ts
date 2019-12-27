import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  SignUp(data: any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
     });
    return this.http.post(environment.signUp, data, { headers: headers });
  }

  forgot(data: any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
     });
    debugger;
    return this.http.post(environment.forgot + data, { headers: headers });
  }
 
  AlreadyUse(data: any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
     });
     return this.http.post(environment.alreadyUser, data, { headers: headers });

  }

  resumeUpload(data:any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
     });
     return this.http.post(environment.uploadresume, data, { headers: headers });

  }
}
