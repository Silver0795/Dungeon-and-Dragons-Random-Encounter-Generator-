import { TestBed } from '@angular/core/testing';

import { TerreniService } from './terreni.service';

describe('TerreniService', () => {
  let service: TerreniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerreniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
