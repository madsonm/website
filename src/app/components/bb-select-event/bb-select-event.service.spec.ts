import { TestBed } from '@angular/core/testing';

import { BbSelectEventService } from './bb-select-event.service';

describe('BbSelectEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BbSelectEventService = TestBed.get(BbSelectEventService);
    expect(service).toBeTruthy();
  });
});
