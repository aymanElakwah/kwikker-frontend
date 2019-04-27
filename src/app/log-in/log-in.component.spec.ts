import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from '../services/data.service';
import { LogInComponent } from './log-in.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';

// describe("LogInComponent", () => {
//     let logInComponent: DataService;
//     let http: HttpClient;
//     it("should call #logInUser in the constructor", () => {
//         let LogIn_Spy = spyOn(DataService.prototype, 'logInUser');

//         logInComponent = new DataService(http, null);

//         expect(LogIn_Spy).toHaveBeenCalled();
//     });

// });

/**
 * Test function to test showErrorMsg(type: number) function
 * If given 1--> shows the first error message
 * If given 2--> shows the second error message 
 */
// describe('LogInComponent', () => {
//   let component: LogInComponent;
//   let fixture: ComponentFixture<LogInComponent>;
//   let dataService: DataService;
//   let route: Router;
  
//   beforeEach(() => {
//     dataService = new DataService(null, null);
//     route = new Router(null,null,null,null,null,null,null,null);
//     component = new LogInComponent(
//       null,null
//     );
//   });

//   describe("showErrorMSg function", () => {
//     beforeEach(() => {
//         component.msg = document.querySelector('.progress');
//         component.msg2 = document.querySelector('.progress2');
//     });
//   });
   
//  it('should redesign the view', () => {
//     component.showErrorMSg(1);
//     expect( this.msg.className).toEqual("show");
//     expect(this.msg2.className).toEqual('hide');
//     component.showErrorMSg(2);
//     expect( this.msg.className).toEqual("hide");
//     expect(this.msg2.className).toEqual('show');
//     component.showErrorMSg(NaN);
//     expect( this.cool.className).toEqual("hide");
//     expect(this.errorOccured.className).toEqual('hide');
//   });
 
 
// });



