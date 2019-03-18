import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobBoardsComponent } from './job-boards.component';

describe('JobBoardsComponent', () => {
  let component: JobBoardsComponent;
  let fixture: ComponentFixture<JobBoardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobBoardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
