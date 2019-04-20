import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable  } from 'rxjs';
import { Message } from '../model/message';
@Injectable(

)
export class DirectMessagesService {
  private socket = io('http//example.com');
  constructor() { }
  ReciveMessage(){
    let observable = new Observable<Message>(observer=>{
    this.socket.on('new message', (data)=>{
      observer.next(data);  
    });
   // return() => this.socket.disconnect();
  });
  return observable;
  }
}
