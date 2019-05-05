import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable  } from 'rxjs';
import { Message } from '../model/message';
import { environment } from 'src/environments/environment.prod';
@Injectable(
  {providedIn: 'root'}
)
/**
 * sockets service
 */
export class DirectMessagesService {
  /**
   * establish socket with backend base url
   */
  private socket = io(environment.base);
  /**
   * to connect with backend socket
   */
  constructor() { 
    this.socket.connect();
  }
  /**
   * to recive all live messages
   * @param username1 from username 
   * @param username2 to username
   */
  ReciveMessage(username1:string,username2:string){
    if(username1>username2){
      let temp=username2;
      username2 =username1;
      username1 = temp;
    }
    let observable = new Observable<Message>(observer=>{
    this.socket.on(username1+username2, (data)=>{
      observer.next(data);  
    });
   // return() => this.socket.disconnect();
  });
  return observable;
  }
}
