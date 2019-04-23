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
/**
 * latest conversations
 */
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  user :Conversation = {
    user: {
      username: 'filonabil333',
      screen_name: 'filo nabil',
      profile_image_url: 'string',
      following: true,
      follows_you: true,
      blocked: true,
      muted: true,
      bio:'hello'
    },
    last_message: {
      id: '123',
      created_at: '2019-03-14T20:40:36.456Z',
      text: 'first message in this site',
      media_url: 'string',
      from_username:'phella',
      to_username: ' 7mada'
    }
  };
  conversations: Conversation[] =[this.user , this.user,this.user,this.user,this.user,this.user,this.user,this.user
           ];
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
              private router: Router) { }
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
    this.router.navigate(['/chat/', {outlets : {body: ['dm']} }]);
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
    
              this.conversations2.next(_.contact(currentConversation , newConversation)) ;
          }
     );
  }
}
