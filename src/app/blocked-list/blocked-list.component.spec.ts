import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedListComponent } from './blocked-list.component';
import { DataService } from '../services/data.service';
describe('BlockedListComponent', () => {
  let component: BlockedListComponent;
  let blocked_service:DataService;

  

  beforeEach(() => {
    
    component = new BlockedListComponent(blocked_service)
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
