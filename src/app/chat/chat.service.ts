import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable()
export class ChatService {
  private addressee = new BehaviorSubject<any>('') ;
  currentAddresse = this.addressee.asObservable();
  constructor() { }
  setAddressee(addressee: any) {
    this.addressee.next(addressee);
  }
}
