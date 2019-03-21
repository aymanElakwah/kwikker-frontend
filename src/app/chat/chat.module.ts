import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { InboxComponent } from '../inbox/inbox.component';
import { RouterModule } from '@angular/router';
import { InboxListComponent } from '../inbox-list/inbox-list.component';

@NgModule({
  declarations: [
  ChatComponent,
  InboxComponent,
  InboxListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'chat' , component: ChatComponent, children: [
      {path: 'inbox', component: InboxComponent, outlet: 'body'},
      {path: 'new', component: InboxListComponent, outlet: 'body'}
    ]} ])
  ]
})
export class ChatModule { }
