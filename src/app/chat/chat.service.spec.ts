import { TestBed } from '@angular/core/testing';
import { SharedModule } from '../shared/shared.module';
import { ChatModule } from './chat.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ChatService } from './chat.service';

describe('ChatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, ChatModule],
      declarations: []
    })
    .compileComponents();
  });

  it('should be created', () => {
    const service: ChatService = TestBed.get(ChatService);
    expect(service).toBeTruthy();
  });
});
