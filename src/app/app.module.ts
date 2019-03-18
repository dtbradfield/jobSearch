import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobBoardsComponent } from './job-boards/job-boards.component';
import { FirstStepsComponent } from './first-steps/first-steps.component';
import { ResumeWorkshopComponent } from './resume-workshop/resume-workshop.component';
import { LandingComponent } from './landing/landing.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    JobBoardsComponent,
    FirstStepsComponent,
    ResumeWorkshopComponent,
    LandingComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
