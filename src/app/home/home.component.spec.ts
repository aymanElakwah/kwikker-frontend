import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let data: DataService; 
  let router: Router;
 


  beforeEach(() => {

    component = new HomeComponent(data, router);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
