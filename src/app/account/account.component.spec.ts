import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountComponent } from './account.component';
import { DataService } from '../services/data.service';
import { MatDialog } from '@angular/material';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let account_service:DataService;
  let dialog: MatDialog;

  

  beforeEach(() => {
    
    component = new AccountComponent(account_service,dialog);
    
  });

  it('should create account component', () => {
    expect(component).toBeTruthy();
  });
});
