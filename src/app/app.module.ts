import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { JobsComponent } from './users/jobs/jobs.component';
import { TermsComponent } from './users/terms/terms.component';
import { UsersDashboardComponent } from './users/users-dashboard/users-dashboard.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { CreateJobsComponent } from './admin/create-jobs/create-jobs.component';
import { ApplicantsComponent } from './admin/applicants/applicants.component';
import { JobsAdminComponent } from './admin/jobs-admin/jobs-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LandingPageComponent,
    JobsComponent,
    TermsComponent,
    UsersDashboardComponent,
    AdminDashboardComponent,
    CreateJobsComponent,
    ApplicantsComponent,
    JobsAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
