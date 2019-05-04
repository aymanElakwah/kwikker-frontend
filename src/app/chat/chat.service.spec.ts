import { TestBed } from '@angular/core/testing';
import { SharedModule } from '../shared/shared.module';
import { ChatModule } from './chat.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ChatService } from './chat.service';

describe('ChatService', () => {


  it('should be created', () => {
    const service: ChatService = TestBed.get(ChatService);
    expect(service).toBeTruthy();
  });
  it('should set current section',()=>{
    const service: ChatService = TestBed.get(ChatService);
    service.setSection(2);
    service.currentSection.subscribe(section=> {
     expect(section).toBe(2); 
    })
  });
  it('should set current addresse',()=>{
    const service: ChatService = TestBed.get(ChatService);
    service.setAddressee('philo');
    service.currentAddresse.subscribe(addresse=> {
     expect(addresse).toBe('philo'); 
    })
  })
});
