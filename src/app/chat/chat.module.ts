import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { InboxComponent } from '../inbox/inbox.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ChatComponent,
  InboxComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'chat' , component: ChatComponent, children: [
      {path: 'inbox', component: InboxComponent, outlet: 'body'}
    ]} ])
  ]
})
export class ChatModule { }
