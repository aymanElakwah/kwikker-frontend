import { Component, OnInit, HostListener } from '@angular/core';
import { Notification } from '../model/notification';
import { assertDataInRange } from '@angular/core/src/render3/state';
import { DataService } from '../services/data.service';
import { Observable, timer } from 'rxjs';
import { delay, last } from 'rxjs/operators';


@Component({
  selector: 'app-notificationslist',
  templateUrl: './notificationslist.component.html',
  styleUrls: ['./notificationslist.component.css']
})
export class NotificationslistComponent implements OnInit {
  /**
   * array of notifications to display
   */
  notificatons_array: Notification[] ;
  
  new_count:number;
  myObservable:Observable<any>;

  notificationsResponse:any;
  lastSeen:string = null;
  /**
   * constructor
   * @param notification_service used to call requests 
   */

  constructor(private notification_service: DataService) { }


  /**
   * initialize rekweek array with a request
   */
  ngOnInit() {
    this.notification_service.getNotificationsList("").subscribe(
      list=>{this.notificationsResponse = list;
        this.notificatons_array = this.notificationsResponse.Notifications;
        this.new_count = this.notificationsResponse.unseen_count;
     
      
      }
    )

    /**
     * event to send request every 30 secinds to check for new notifications
     */
    const source = timer(1000*30, 1000*30);
     source.subscribe(val => 
      this.refreshNotifications());
  }

  /**
   * called every 30 seconds to check for new notifications
   */
  refreshNotifications(){
    this.notification_service.getNotificationsList("").subscribe(
      list=>{this.notificationsResponse = list;
        this.notificatons_array = this.notificationsResponse.Notifications;
        this.new_count = this.notificationsResponse.unseen_count;
     
      })
      
  }
  /**
   * set a delay by await delay(300); 300 ms
   * @param ms
   * @returns promise
   */
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  /**
   * function to change color of un seen notifications
   * @param index to only change color for new notifications
   */
  getColor(index:number){
    if(index < this.new_count){
      return '#E8F5FD';
    }
    else{
      return 'white';
    }
  };

/**
 * when nearly half screen is scrolled this function fetches more notifications
 */
  onScroll(){
    if (this.notificatons_array.length != 0) 
    {
      var last_notification_id = this.notificatons_array[this.notificatons_array.length-1].id;
      if (this.lastSeen != last_notification_id) {
        this.notification_service.getNotificationsList(last_notification_id).subscribe(
          list =>{
            this.notificationsResponse = list;
            this.notificatons_array = this.notificatons_array.concat(this.notificationsResponse);
          }
        )
        this.lastSeen = last_notification_id;
         
      }
    }
  }
}
