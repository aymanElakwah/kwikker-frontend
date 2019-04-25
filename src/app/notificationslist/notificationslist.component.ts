import { Component, OnInit, HostListener } from '@angular/core';
import { Notification } from '../model/notification';
import { assertDataInRange } from '@angular/core/src/render3/state';
import { DataService } from '../services/data.service';
import { Observable, timer } from 'rxjs';


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
  
  new_count:number= 2;

  myObservable:Observable<any>;
  constructor(private notification_service: DataService) { }



  ngOnInit() {
    this.notification_service.getNotificationsList("").subscribe(
      list=>{this.notificatons_array = list;
      console.log(list);
      }
    )

    //this.myObservable = Rx.Observable.timer();
    const source = timer(1000*30, 1000*30);
     source.subscribe(val => 
      this.refreshNotifications());
  }

  refreshNotifications(){
    this.notification_service.getNotificationsList("").subscribe(
      list=>{this.notificatons_array = list;
      console.log(list);
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
  getColor(index:number){
    if(index < this.new_count){
      return '#E8F5FD';
    }
    else{
      return 'white';
    }
  };

  @HostListener("window:scroll", [])
onScroll(): void {
if ((window.innerHeight + window.scrollY) >=  document.body.scrollHeight) {
        console.log("end of screeen")
    }
}
  
  
}
