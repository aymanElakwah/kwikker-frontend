import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '../shared/shared.module';
import { ChatModule } from '../chat/chat.module';
import { RouterTestingModule } from '@angular/router/testing';
import { DirectMessagesComponent } from './direct-messages.component';
import { ChatService } from '../chat/chat.service';

describe('DirctMessagesComponent', () => {
  let component: DirectMessagesComponent;
  let fixture: ComponentFixture<DirectMessagesComponent>;
  beforeEach(() => {
    component = new DirectMessagesComponent(null,null,null,null,null);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
