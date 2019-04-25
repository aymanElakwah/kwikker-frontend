import { Component, OnInit } from '@angular/core';
import { Notification } from '../model/notification';
import { assertDataInRange } from '@angular/core/src/render3/state';
import { DataService } from '../services/data.service';


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
  constructor(private notification_service: DataService) { }

  ngOnInit() {
    this.notification_service.getNotificationsList("").subscribe(
      list=>{this.notificatons_array = list;
      console.log(list);
      }
    )
  }
  
}
