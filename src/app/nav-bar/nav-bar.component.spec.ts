import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  
  let dialog: MatDialog;
  let data: DataService;
  let router: Router;
  
  

  beforeEach(() => {
    component = new NavBarComponent(dialog,data,router)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
