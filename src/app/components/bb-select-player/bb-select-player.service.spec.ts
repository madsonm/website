import { TestBed } from '@angular/core/testing';

import { BbSelectPlayerService } from './bb-select-player.service';

describe('BbSelectPlayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BbSelectPlayerService = TestBed.get(BbSelectPlayerService);
    expect(service).toBeTruthy();
  });
});
