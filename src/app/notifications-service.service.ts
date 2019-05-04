import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable  } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Notification } from '../app/model/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationsServiceService {
  private socket = io(environment.base);
  constructor() { 
    this.socket.connect();
  }

  ReciveNotifications(username:string){
    let observable = new Observable<string>(observer=>{
    this.socket.on(username, (data)=>{
      observer.next(data);  
    });
  });
  return observable;
  }
}
