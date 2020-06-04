import { TestBed } from '@angular/core/testing';

import { SoftwareCoursesService } from './software-courses.service';

describe('SoftwareCoursesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SoftwareCoursesService = TestBed.get(SoftwareCoursesService);
    expect(service).toBeTruthy();
  });
});
