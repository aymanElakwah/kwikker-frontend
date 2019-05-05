import { TestBed } from '@angular/core/testing';

import { NotificationsServiceService } from './notifications-service.service';

describe('NotificationsServiceService', () => {
 beforeEach(() => TestBed.configureTestingModule({}));

 it('should be created', () => {
   const service: NotificationsServiceService = TestBed.get(NotificationsServiceService);
   expect(service).toBeTruthy();
 });
});
