/* tslint:disable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { InboxComponent } from './inbox.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule, MatFormFieldModule, MatIconModule, MatDialogRef } from '@angular/material';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {ChatService} from '../chat/chat.service';
import { Router } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { of } from 'rxjs/internal/observable/of';

describe('InboxComponent', () => {
  
  let component: InboxComponent;

  let cs: ChatService;
  let list:any;
  beforeEach(() => {
    cs = new ChatService();
   component = new InboxComponent(null,cs,null);
    list = [
    { user:
      {
        "username": 'testAcc',
        "screen_name": 'testAcc0',
        "profile_image_url": '',
        "following": false,
        "blocked": false,
        "follows_you": false,
        "muted": false,
        "bio": 'gamed 5osteka'
      },
      "last_message":
      {
        "from_username": 'testAcc',
        "to_username": 'zmalek',
        "created_at": '14/2/2011',
        "text": 'momkn t4t8l',
        "media_url":'nothing',
        "id": '3'
      }
    }
  ];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should view right name', ( ) => {
    const beforeFunc = list[0].last_message.text;
    localStorage.clear();
    component.SetSenderName(list);
    expect(list[0].last_message.text).toBe('testAcc :'+beforeFunc);
    
  });
  it('should view Sent photo',( )=>{
    list[0].last_message.text = '' ;
    component.SetSenderName(list);
    expect(list[0].last_message.text).toBe('Sent a photo');
  });

  it('should view You sent photo',()=> {
    localStorage.setItem("username","testAcc");
    const beforeFunc = list[0].last_message.text ;
    component.SetSenderName(list);
    expect(list[0].last_message.text).toBe('You :'+beforeFunc)
  })
})
