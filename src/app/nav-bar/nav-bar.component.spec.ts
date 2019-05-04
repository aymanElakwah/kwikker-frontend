import {  ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from '../services/data.service';
import { NavBarComponent } from './nav-bar.component';
import { MatDialog, MatChipInputEvent } from '@angular/material';
import { Router } from '@angular/router';
import { NgxSpinnerService, NgxSpinnerModule } from 'ngx-spinner';
/**
 * Describe function to test the navbar functionalities.
 */
describe('Navbar Component', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let dataService: DataService;
  let  dialog: MatDialog;
  let route: Router;
  let spinner: NgxSpinnerService;
/**
 * beforeEach function to set the navbar component's variables before each operation is done.
 */
  beforeEach(() => {
    dataService = new DataService(null, null,null);
    component = new NavBarComponent(dialog,dataService,route,spinner);
    });

/**
 * Function to test the creation of the navbar component.
 */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

/**
 * A unit test function, tests that user is successfully logged out of the system.
 */
  describe("logOutUser Function", () => {
    beforeEach(() => {
        dataService = new DataService(null, null,null);
        let router = jasmine.createSpyObj("Router", ["navigate"]);
        component = new NavBarComponent(dialog,dataService,router,spinner);
        });
    /**
     * Function to test the logOut function in the navbar.
     */
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
