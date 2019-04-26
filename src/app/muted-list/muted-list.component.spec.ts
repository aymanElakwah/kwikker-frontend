import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutedListComponent } from './muted-list.component';

import { DataService } from '../services/data.service';
describe('MutedListComponent', () => {
  let component: MutedListComponent;
  let muted_service:DataService;

  

  beforeEach(() => {
    
    component = new MutedListComponent(muted_service)
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
