import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeWorkshopComponent } from './resume-workshop.component';

describe('ResumeWorkshopComponent', () => {
  let component: ResumeWorkshopComponent;
  let fixture: ComponentFixture<ResumeWorkshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeWorkshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
