import { TestBed } from '@angular/core/testing';

import { RealRevenueService } from './real-revenue.service';

describe('RealRevenueService', () => {
  let service: RealRevenueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealRevenueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
