import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '../shared/shared.module';
import { ChatModule } from '../chat/chat.module';
import { RouterTestingModule } from '@angular/router/testing';
import { DirectMessagesComponent } from './direct-messages.component';
import { ChatService } from '../chat/chat.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { DataService } from '../services/data.service';
import { of } from 'rxjs/internal/observable/of';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('DirctMessagesComponent', () => {
  let component: DirectMessagesComponent;
  let fixture: ComponentFixture<DirectMessagesComponent>;
  let fb = new FormBuilder;
  let ds = new DataService(null,null);
  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports:[FormsModule , ReactiveFormsModule]
    }).compileComponents();
  })
  
  beforeEach(() => {
    
    component = new DirectMessagesComponent(null,fb,ds,null,null);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should call postMedia' ,()=>{
    let spy = spyOn(ds, "postMedia").and.callFake(() => {
      return of('1234');
    });
    let spy2 = spyOn(ds, "createMessage").and.callFake(() => {
      return of('1234');
    });
    const message1={
    from_username: 'ahly',
    to_username: 'zamalek',
    created_at: '3am',
    text: 'hi there',
    id: '1',
    media_url: 'ahmed.html'
    };
    component.myForm =fb.group({
      message: [''],
      file : [null]
      });
    component.myForm.setValue({message:message1,file:null});
    component.uploadImg = true;
    component.addressee ={
      username:'philo',
      screen_name: 'philo',
      profile_image_url: null,
      following: false,
      follows_you: false,
      blocked: false,
      muted: false,
      bio: 'empty'};
    component.send();
    expect(spy).toHaveBeenCalled();
  })
});
