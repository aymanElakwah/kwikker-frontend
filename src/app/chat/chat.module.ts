// angular modules
import { NgModule} from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// module components
import { ChatComponent } from './chat.component';
import { InboxComponent } from '../inbox/inbox.component';
import { InboxListComponent } from '../inbox-list/inbox-list.component';
import {DirectMessagesComponent} from '../direct-messages/direct-messages.component';
// module services
import { ChatService } from './chat.service';
// angular material modules
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
@NgModule({
  declarations: [
  ChatComponent,
  InboxComponent,
  InboxListComponent,
  DirectMessagesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'chat' , component: ChatComponent}]),
    ReactiveFormsModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    InfiniteScrollModule
  ],
  providers: [
    ChatService
  ]
})
export class ChatModule { }
