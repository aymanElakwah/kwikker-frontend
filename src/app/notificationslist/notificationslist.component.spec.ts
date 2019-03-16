import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationslistComponent } from './notificationslist.component';

describe('NotificationslistComponent', () => {
  let component: NotificationslistComponent;
  let fixture: ComponentFixture<NotificationslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
