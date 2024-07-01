import { TestBed } from '@angular/core/testing';

import { LuoghiServiceService } from './luoghi-service.service';

describe('LuoghiServiceService', () => {
  let service: LuoghiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LuoghiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
