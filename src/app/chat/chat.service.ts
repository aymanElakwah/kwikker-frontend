import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  /**
   * variable to store addressee person
   */
  private addressee = new BehaviorSubject<any>('') ;
  /**
   * screenshot of the current addresse 
   */
  currentAddresse = this.addressee.asObservable();
  /**
   * variable to store opend section
   */
  private section = new BehaviorSubject<any>('') ;
  /**
   * screenshot of type observable
   */
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
