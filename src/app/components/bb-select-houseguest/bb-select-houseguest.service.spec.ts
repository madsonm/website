import { TestBed } from '@angular/core/testing';

import { BbSelectHouseguestService } from './bb-select-houseguest.service';

describe('BbSelectHouseguestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BbSelectHouseguestService = TestBed.get(BbSelectHouseguestService);
    expect(service).toBeTruthy();
  });
});
