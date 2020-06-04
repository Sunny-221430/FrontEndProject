import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElearningAboutComponent } from './elearning-about.component';

describe('ElearningAboutComponent', () => {
  let component: ElearningAboutComponent;
  let fixture: ComponentFixture<ElearningAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElearningAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElearningAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
