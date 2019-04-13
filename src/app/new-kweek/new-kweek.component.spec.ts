import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewKweekComponent } from './new-kweek.component';
import { MatDialogRef } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.service';

describe('NewKweekComponent', () => {
  let component: NewKweekComponent;
  let thisDialogRef: MatDialogRef<NewKweekComponent>; 
  let http: HttpClient; 
  let newKweekService: DataService;
  

  beforeEach(() => {
    component = new NewKweekComponent( thisDialogRef, http, newKweekService);
  });

  

  it('should delete image', () => {
    component.removeImage();
    expect(component.selectedImage).toBeNull()
  });
});
