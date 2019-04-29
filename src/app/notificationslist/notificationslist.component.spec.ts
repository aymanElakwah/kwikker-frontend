import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationslistComponent } from './notificationslist.component';
import { DataService } from '../services/data.service';
import { empty, from } from 'rxjs';
import { CommonModule } from '@angular/common';

describe('NotificationslistComponent', () => {
  let component: NotificationslistComponent;
  let fixture: ComponentFixture<NotificationslistComponent>;
  let notification_service:DataService;

  beforeEach(() => {
    notification_service = new DataService(null,null);
    component = new NotificationslistComponent(notification_service);
  
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("notifications functionality",()=>{
    let notificArr = {
      unseen_count: Number(),
      Notifications:[{
        id:String()
      }]
    }
    it("ngOnInit should request list of notifications",()=>{
      let spy = spyOn(notification_service,"getNotificationsList").and.callFake(()=>{
        return empty();
      })

      component.ngOnInit();
      expect(spy).toHaveBeenCalled();
    })

    it("refreshNotifications should request list of notifications",()=>{
      let spy = spyOn(notification_service,"getNotificationsList").and.callFake(()=>{
        return empty();
      })

      component.refreshNotifications();
      expect(spy).toHaveBeenCalled();
    })

    it("color changes",()=>{
      component.new_count = 2;
      let new_color = component.getColor(1);
      expect(new_color).toBe("#E8F5FD");
      new_color = component.getColor(2);
      expect(new_color).toBe("white"); 
    })

    it("should call on scroll",()=>{
      notificArr.unseen_count = 2;
      notificArr.Notifications = [{id:"1"},{id:"2"}];
      component.lastSeen = "1";
      let spy = spyOn(notification_service,"getNotificationsList").and.callFake(()=>{
        return from([notificArr]);
      })
      component.ngOnInit();
      component.onScroll();
      expect(spy).toHaveBeenCalled();
    })

  })
});
