import { TestBed } from '@angular/core/testing';

import { ScheduleHttpService } from './schedule-http.service';

describe('ScheduleHttpService', () => {
  let service: ScheduleHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
