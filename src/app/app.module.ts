import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobBoardsComponent } from './job-boards/job-boards.component';
import { FirstStepsComponent } from './first-steps/first-steps.component';
import { ResumeWorkshopComponent } from './resume-workshop/resume-workshop.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    JobBoardsComponent,
    FirstStepsComponent,
    ResumeWorkshopComponent,
    LandingComponent,
    BsDropdownModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
