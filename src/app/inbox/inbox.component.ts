// angular components
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
// services
import { ChatService } from '../chat/chat.service';
import { DataService } from '../services/data.service';
// conversation model
import { Conversation } from '../model/inbox';
/**
 * latest conversations
 */
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  conversations: Conversation[];
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
     this.data.getConverstations().subscribe(
      list => {
              this.SetSenderName(list);
              this.conversations = list ;
      }
     );
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
}
