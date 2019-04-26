// angular components
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
// services
import { ChatService } from '../chat/chat.service';
import { DataService } from '../services/data.service';
// conversation model
import { Conversation } from '../model/inbox';
import { BehaviorSubject } from 'rxjs';
import * as _ from 'lodash'; 
import { MatDialogRef } from '@angular/material';
import { ChatComponent } from '../chat/chat.component';
/**
 * latest conversations
 */
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  conversations2 = new BehaviorSubject([]);
  lastUsername = '';
  finished=false;
  /**
   *
   * @param data service to make calls to backend
   * @param chat service to transfer chat data
   */
  constructor(private data: DataService,
              private chatService: ChatService,
              public DialogRef: MatDialogRef<ChatComponent>) { }
  /**
   * get all conversations
   */
  ngOnInit() {
    this.getConversations();
  }
  /**
   * navigate to person DM
   * @param selected selected conversation
   */
  toDirectMessage(selected: Conversation): void {
    this.chatService.setAddressee(selected.user);
    this.chatService.setSection(3);
  }
  /**
   * add prefix before recent last messages
   * @param list list of recent last messages
   */
  SetSenderName(list) {
    list.forEach(element => {
      if ( element.last_message.text === '' && element.last_message.media_url !== '') {
        if (element.last_message.from_username === localStorage.getItem('username') ) {
          element.last_message.text = 'You sent a photo' ;
        } else {
          element.last_message.text = 'Sent a photo';
        }
      } else {
        if ( element.last_message.from_username === localStorage.getItem('username')) {
          element.last_message.text = 'You :' + element.last_message.text;
        } else {
          element.last_message.text = element.last_message.from_username + ' :' + element.last_message.text;
        }
      }
    });
  }
  onscroll(){
    console.log("scrolled");
    this.getConversations();
  }
  private getConversations(){
    if(this.finished){
      return;
    }
    this.data.getConverstations(this.lastUsername).subscribe(
      list => {
            this.SetSenderName(list);
              this.lastUsername = _.last(list)['$username'];
              const newConversation = _.slice(list,0,20);
              const currentConversation = this.conversations2.getValue();
              if(this.lastUsername == _.last(newConversation)['$username']){
                this.finished = true;
              }
    
              this.conversations2.next(_.concat(currentConversation , newConversation)) ;
          }
     );
  }
  composeMsg(){
    this.chatService.setSection(2);
  }
  /**
   * close dialog
   */
  exit(){
    this.DialogRef.close();
  }
}
