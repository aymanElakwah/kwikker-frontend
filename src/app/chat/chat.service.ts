import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private addressee = new BehaviorSubject<any>('') ;
  currentAddresse = this.addressee.asObservable();
  private section = new BehaviorSubject<any>('') ;
  currentSection = this.section.asObservable();
  constructor() {
    this.setSection(1);
   }
  setAddressee(addressee: any) {
    this.addressee.next(addressee);
  }
  setSection(section: any) {
    this.section.next(section);
  }
}
