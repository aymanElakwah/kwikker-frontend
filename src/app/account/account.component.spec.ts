import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountComponent } from './account.component';
import { DataService } from '../services/data.service';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let account_service:DataService;

  

  beforeEach(() => {
    
    component = new AccountComponent(account_service)
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
