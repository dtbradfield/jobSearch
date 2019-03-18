import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobBoardsComponent } from './job-boards/job-boards.component';
import { FirstStepsComponent } from './first-steps/first-steps.component';
import { ResumeWorkshopComponent } from './resume-workshop/resume-workshop.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'job-boards', component: JobBoardsComponent },
  { path: 'first-steps', component: FirstStepsComponent },
  { path: 'resume-workshop', component: ResumeWorkshopComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
