import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AdminComponent } from './components/admin/admin.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { TestComponent } from './components/test/test.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'forgot', component: ForgotComponent },
  {path: 'reset/password', component: ResetPasswordComponent },
  {
    path: 'main', component: HomeComponent ,
    children:[
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: EmployeeComponent},
      { path: 'admin', component: AdminComponent},
      { path: 'Admin/Dashboard' , component:AdminDashboardComponent},
      { path: 'job/detail' , component:TestComponent},
    ]
  },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
