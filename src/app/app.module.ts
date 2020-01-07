import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import {CardModule} from 'primeng/card';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { ForgotComponent } from './components/forgot/forgot.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input'
import { EmployeeComponent } from './components/employee/employee.component';
import { HomeComponent } from './components/home/home.component';
import {MenuItem} from 'primeng/api';
import { AppEmployeeComponent } from './components/app-employee/app-employee.component';  
import {DialogModule} from 'primeng/dialog';
import {CalendarModule} from 'primeng/calendar';
import {ChartModule} from 'primeng/chart';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import { ToastrModule } from 'ngx-toastr';
import { AdminComponent } from './components/admin/admin.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CreateJobComponent } from './components/create-job/create-job.component';

//import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
// import { RecaptchaModule } from 'ng-recaptcha';
// import { BOOL_TYPE } from '@angular/compiler/src/output/output_ast';
// imports: [
//     BrowserModule,
//      RecaptchaModule.forRoot(),  
    // RecaptchaFormsModule,  
//] 
//  import {RECAPTCHA_SETTINGS,
//     RecaptchaLoaderService,
//   RecaptchaModule,
//   RecaptchaSettings,} from 'ng-recaptcha'
// const globalSettings: RecaptchaSettings = { siteKey: '6Le-BsYUAAAAAE9dpS8I6iIFogMcaJyM_tEFZcpM' };

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotComponent,
    EmployeeComponent,
    HomeComponent,
    AppEmployeeComponent,
    AdminComponent,
    ResetPasswordComponent,
    AdminDashboardComponent,
    CreateJobComponent,
   
  ],
 
  
  imports: [
    ChartModule,
    BrowserModule,
    AutoCompleteModule,
    AccordionModule,
    RouterModule.forRoot([]),
    CardModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    RecaptchaModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxIntlTelInputModule,
    Ng2SearchPipeModule,
    DialogModule,
    NgxPaginationModule,
    CalendarModule,
     BrowserAnimationsModule ,
     TableModule,
     ToastrModule.forRoot({
      closeButton: true,
      progressBar: true,
      preventDuplicates : true
    })

   
  ],
   bootstrap: [AppComponent],
   providers: [{
    provide: RECAPTCHA_SETTINGS,
    useValue: {
     siteKey: '6LfeasYUAAAAAITP4bKdndM-R6_L211YDfzwY8If',
    } as RecaptchaSettings,
   }]
  // providers: [  
  //  {
  //    provide: RECAPTCHA_SETTINGS,
  //  useValue: globalSettings,
  // },
  // ],
  // bootstrap: [AppComponent]
  
})
export class AppModule { }
