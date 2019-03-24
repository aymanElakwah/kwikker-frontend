import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
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
   *
   * @param router to navigate to children components
   */
  constructor(private router: Router) { }

}
