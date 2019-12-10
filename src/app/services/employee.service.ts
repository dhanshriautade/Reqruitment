import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  
  constructor(private http: HttpClient) { }

  AddEmployee(data: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
     });
    return this.http.post(environment.Employeepost, data,{ headers: headers });
  }

  getEmployee(){
    return this.http.get<any>(environment.Employeeget);
  }
}
