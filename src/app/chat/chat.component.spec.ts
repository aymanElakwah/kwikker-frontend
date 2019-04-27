import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '../shared/shared.module';
import { ChatModule } from './chat.module';
import { ChatComponent } from './chat.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;

  beforeEach(() => {
    component = new ChatComponent(null,null);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
