import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertComponentComponent } from './alert-component.component';
import { MatDialogRef } from '@angular/material';

describe('AlertComponentComponent', () => {
  let component: AlertComponentComponent;
  let thisDialogRef: MatDialogRef<AlertComponentComponent>;

  beforeEach(() => {
 
    component = new AlertComponentComponent(thisDialogRef);
    
  });

  /*it('should create alert dialogue', () => {
    expect(component).toBeTruthy();
  });*/
});
