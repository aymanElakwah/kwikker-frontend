import {  ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from '../services/data.service';
import { NavBarComponent } from './nav-bar.component';
import { MatDialog, MatChipInputEvent } from '@angular/material';
import { Router } from '@angular/router';

describe('Navbar Component', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let dataService: DataService;
  let  dialog: MatDialog;
  let route: Router;


  beforeEach(() => {
    dataService = new DataService(null, null);
    component = new NavBarComponent(dialog,dataService,route);
    });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
/**
 * A unit test function, tests that user's usrename is stored
 */
  describe("ngOnInit Function", () => {
        beforeEach(() => {
            dataService = new DataService(null, null);
            component = new NavBarComponent(dialog,dataService,route);
            });
        
        it("It should store user's suername", () => {
            
            component.ngOnInit();
            let usr = localStorage.getItem("username");
            let usr2 = component.userName;
            expect(usr).toBeTruthy();
            expect(usr).toEqual(usr2);
              });
      });

/**
 * A unit test function, tests that user is successfully logged out of the system.
 */
  describe("logOutUser Function", () => {
    beforeEach(() => {
        dataService = new DataService(null, null);
        let router = jasmine.createSpyObj("Router", ["navigate"]);
        component = new NavBarComponent(dialog,dataService,router);
        });
    
    it('It should log out user by freeing up the token and username places, then navigate to the welcome page.', () => {
        let router = jasmine.createSpyObj("Router", ["navigate"]);
        component.logOutUser();
        let tok = localStorage.getItem("TOKEN");
        let usr = localStorage.getItem("username");
        expect(tok).toBeNull();
        expect(usr).toBeNull();
          });
  });
});
