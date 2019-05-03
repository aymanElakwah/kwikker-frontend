import {  ComponentFixture } from '@angular/core/testing';
import { DataService } from '../services/data.service';
import { LogInComponent } from './log-in.component';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpErrorResponse,  HttpParams,  HttpHeaders } from '@angular/common/http';
import { CacheService } from '../services/cache.service';
import { Router } from '@angular/router';
describe('Login Component', () => {
  let component: LogInComponent;
  let fixture: ComponentFixture<LogInComponent>;
  let dataService: DataService;
  let http: HttpClient;
  let cacheService: CacheService;
  let route:Router;

  beforeEach(() => {
    dataService = new DataService(http, cacheService,null);
    component = new LogInComponent(dataService,route);
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

/**
 * A unit test function, tests that user's logged in
 */
// describe("Submit Function", () => {
//   beforeEach(() => {
//       let http: HttpClient;
//       dataService = new DataService(http, cacheService);
//       let router = jasmine.createSpyObj("Router", ["navigate"]);
//       component = new LogInComponent(dataService,router);
//       });
  
//   it("It log user in", () => {
//       const testForm = <NgForm>{
//       value: {
//         username: "Hello",
//         password: "Evram123"
//       }
//   };
//     component.submitForm(testForm);
//     let usr=  localStorage.getItem('username');
//     expect(usr).toEqual("Hello");
//     expect(component.isLoggedIn).toBeTruthy();
//    });
// });

  
});
