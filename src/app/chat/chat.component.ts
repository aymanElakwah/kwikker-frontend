import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ChatService } from './chat.service';
/**
 * main chat component that has children routes
 */
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent  {
  /**
   * current viewed section
   */
  section:number;
  /**
   *
   * @param router to navigate to children components
   */
  constructor(private router: Router,
              private chatService: ChatService) {

   }
   ngOnInit(): void {
    this.chatService.currentSection.subscribe(section => this.section = section);
   }

}
