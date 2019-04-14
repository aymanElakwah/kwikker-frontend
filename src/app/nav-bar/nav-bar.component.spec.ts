import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let  modalService: NgbModal;
  let  dialog: MatDialog;

  

  beforeEach(() => {
    component = new NavBarComponent(modalService,dialog)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
