import { TestBed } from '@angular/core/testing';

import { DirectMessagesService } from './direct-messages.service';

describe('DirectMessagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DirectMessagesService = TestBed.get(DirectMessagesService);
    expect(service).toBeTruthy();
  });
});
