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
import {RECAPTCHA_SETTINGS,
  RecaptchaLoaderService,
  RecaptchaModule,
  RecaptchaSettings,} from 'ng-recaptcha'
const globalSettings: RecaptchaSettings = { siteKey: '6Le-BsYUAAAAAE9dpS8I6iIFogMcaJyM_tEFZcpM' };
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotComponent
  ],
  
  imports: [
    BrowserModule,
    AccordionModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    CardModule,
    AppRoutingModule,
    FormsModule,
    RecaptchaModule,
  ],
  providers: [  
    {
      provide: RECAPTCHA_SETTINGS,
    useValue: globalSettings,
  },
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
