import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '../shared/shared.module';
import { ChatModule } from '../chat/chat.module';
import { RouterTestingModule } from '@angular/router/testing';
import { InboxListComponent } from './inbox-list.component';

describe('InboxListComponent', () => {
  let component: InboxListComponent;
  let fixture: ComponentFixture<InboxListComponent>;

  beforeEach(() => {
    component = new InboxListComponent(null,null,null,null);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("can't choose user more than one time",()=>{
    const date = new Date();
    const user ={username: 'philo',
    screen_name: 'philo',
    bio: 'nothing',
    birth_date: date,
    created_at: date,
    profile_image_url: 'abc',
    profile_banner_url: 'cba',
    following: true,
    follows_you: false,
    followers_count: 2,
    following_count: 3,
    kweeks_count: 2,
       /** Number Of Likes To Kweeks Made */
    likes_count: 2,
      /** If The Authorised User Block That User */
    blocked: false,
       /** If The Authorised User Muted That User */
    muted: false};
    component.selectUser(user);
    component.selectUser(user);
    expect( component.selectedUsers.length).toBe(1);
  })
});
