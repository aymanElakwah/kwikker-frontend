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

describe('InboxComponent', () => {
  /*
  let component: InboxComponent;
  let fixture: ComponentFixture<InboxComponent>;
  let cs: ChatService;
  let router: Router;
  beforeEach(async(() => {
    cs = new ChatService();
    TestBed.configureTestingModule({
      imports : [ CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        MatChipsModule,
        MatFormFieldModule,
        MatIconModule,
      InfiniteScrollModule],
      declarations: [ InboxComponent,
      MatDialogRef ],
      providers: [ ChatService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should view right prefix', ( ) => {
    const test = 'momkn t4t8l';
    const list = [
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
    component.SetSenderName(list);
    expect(list[0].last_message.text).toBe('YOU: '+this.text);
    list[0].last_message.text = null;
    expect(list[0].last_message.text).toBe('You send a photo');
    list[0].last_message.from_username='zmalek';
    expect(list[0].last_message.text).toBe('sent a photo');
  });

  it('should only work with right parameters', () => {
    const navigateSpy = spyOn(router, 'navigate');
    const list =
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
      };
    component.toDirectMessage(list);
    expect(navigateSpy).toHaveBeenCalledWith(['/chat/', {outlets : {body: ['dm']} }]);
  });
  */
});
