import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ApplicantsComponent } from './admin/applicants/applicants.component';
import { CreateJobsComponent } from './admin/create-jobs/create-jobs.component';
import { JobsAdminComponent } from './admin/jobs-admin/jobs-admin.component';
import { UpdateJobsComponent } from './admin/update-jobs/update-jobs.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { JobsComponent } from './users/jobs/jobs.component';
import { ResumeComponent } from './users/resume/resume.component';
import { TermsComponent } from './users/terms/terms.component';
import { UserHomeComponent } from './users/user-home/user-home.component';
import { UsersDashboardComponent } from './users/users-dashboard/users-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing-page', pathMatch: 'full'},
  { path: 'landing-page', component:LandingPageComponent, pathMatch: 'full'},
  { path: 'register', component:RegisterComponent, pathMatch: 'full'},
  { path: 'login', component:LoginComponent, pathMatch: 'full'},
  { path: 'user', component:UsersDashboardComponent, pathMatch: 'full'},
  { path: 'jobs', component:JobsComponent, pathMatch: 'full'},
  { path: 'terms', component:TermsComponent, pathMatch: 'full'},
  { path: 'admin', component:AdminDashboardComponent, pathMatch: 'full'},
  { path: 'applicants', component:ApplicantsComponent, pathMatch: 'full'},
  { path: 'resume', component:ResumeComponent, pathMatch: 'full'},
  { path: 'jobsAdmin', component:JobsAdminComponent, pathMatch: 'full'},
  { path: 'create-jobs', component:CreateJobsComponent, pathMatch: 'full'},
  { path: 'update-jobs/:id', component:UpdateJobsComponent, pathMatch: 'full'},
  { path: 'home', component:UserHomeComponent, pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
