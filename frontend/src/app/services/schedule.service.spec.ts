import { TestBed } from '@angular/core/testing';

import { SchedulesService } from './schedule.service';

describe('ScheduleService', () => {
  let service: SchedulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchedulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
