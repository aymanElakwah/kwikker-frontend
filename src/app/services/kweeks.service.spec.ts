import { TestBed } from '@angular/core/testing';

import { KweeksService } from './kweeks.service';

describe('KweeksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KweeksService = TestBed.get(KweeksService);
    expect(service).toBeTruthy();
  });
});
