import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareCoursesComponent } from './software-courses.component';

describe('SoftwareCoursesComponent', () => {
  let component: SoftwareCoursesComponent;
  let fixture: ComponentFixture<SoftwareCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
