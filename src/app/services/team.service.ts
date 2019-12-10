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
}
