import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationslistComponent } from './notificationslist.component';
import { DataService } from '../services/data.service';

describe('NotificationslistComponent', () => {
  let component: NotificationslistComponent;
  let fixture: ComponentFixture<NotificationslistComponent>;
  let notification_service:DataService;

  beforeEach(() => {
    component = new NotificationslistComponent(notification_service);
  
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
