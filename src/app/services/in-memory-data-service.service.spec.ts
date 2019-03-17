import { TestBed } from '@angular/core/testing';

import { InMemoryDataServiceService } from './in-memory-data-service.service';

describe('InMemoryDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryDataServiceService = TestBed.get(InMemoryDataServiceService);
    expect(service).toBeTruthy();
  });
});
