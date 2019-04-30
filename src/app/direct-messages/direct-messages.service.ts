import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable  } from 'rxjs';
import { Message } from '../model/message';
import { environment } from 'src/environments/environment.prod';
@Injectable(
  {providedIn: 'root'}
)
export class DirectMessagesService {
  private socket = io(environment.base);
  constructor() { 
    this.socket.connect();
  }
  ReciveMessage(username1:string,username2:string){
    if(username1>username2){
      let temp=username2;
      username2 =username1;
      username1 = temp;
    }
    let observable = new Observable<Message>(observer=>{
    this.socket.on(username1+username2, (data)=>{
      console.log(username1+username2);
      observer.next(data);  
    });
   // return() => this.socket.disconnect();
  });
  return observable;
  }
}
