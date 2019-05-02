import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsComponent } from './notifications.component';

describe('NotificationsComponent', () => {
  let component: NotificationsComponent;
  let fixture: ComponentFixture<NotificationsComponent>;



  beforeEach(() => {
    component = new NotificationsComponent(null);
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
