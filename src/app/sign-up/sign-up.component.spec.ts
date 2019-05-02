// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { SignUpComponent } from './sign-up.component';
// import { DataService } from '../services/data.service';
// import { HttpClient } from '@angular/common/http';
// /**
//  * A descripe function to test which error message to show for different data entries.
//  * and tests for date conversion function into string
//  */
// describe('SignUpComponent', () => {
//   let component: SignUpComponent;
//   let fixture: ComponentFixture<SignUpComponent>;
  

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ SignUpComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(SignUpComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create a valid date', () => {
//     const result  = component.redesignDateFormat("Sun Jan 01 2011");
//     const result2  = component.redesignDateFormat("Sun Feb 01 2011");
//     const result3  = component.redesignDateFormat("Sun Jan 01 2011");
//     expect(result).toContain("2011");    
//     expect(result2).toContain("2011");    
//     expect(result3).toContain("2011");    


//   });
//  it('should redesign the view', () => {
//     component.whatToShow(0);
//     expect( this.cool.className).toEqual("show");
//     expect(this.errorOccured.className).toEqual('hide');
//     expect(this.errorOccured2.className).toEqual('hide');
//     expect(this.errorOccured3.className).toEqual('hide');
//     expect(this.errorOccured4.className).toEqual('hide');
    

//     component.whatToShow(1);
//     expect( this.cool.className).toEqual("hide");
//     expect(this.errorOccured.className).toEqual('hide');
//     expect(this.errorOccured2.className).toEqual('show');
//     expect(this.errorOccured3.className).toEqual('hide');
//     expect(this.errorOccured4.className).toEqual('hide');
    
//     component.whatToShow(2);
//     expect( this.cool.className).toEqual("hide");
//     expect(this.errorOccured.className).toEqual('hide');
//     expect(this.errorOccured2.className).toEqual('hide');
//     expect(this.errorOccured3.className).toEqual('show');
//     expect(this.errorOccured4.className).toEqual('hide');
      


//     component.whatToShow(3);
//     expect( this.cool.className).toEqual("hide");
//     expect(this.errorOccured.className).toEqual('hide');
//     expect(this.errorOccured2.className).toEqual('hide');
//     expect(this.errorOccured3.className).toEqual('hide');
//     expect(this.errorOccured4.className).toEqual('show');
    

//     component.whatToShow(4);
//     expect( this.cool.className).toEqual("hide");
//     expect(this.errorOccured.className).toEqual('show');
//     expect(this.errorOccured2.className).toEqual('hide');
//     expect(this.errorOccured3.className).toEqual('hide');
//     expect(this.errorOccured4.className).toEqual('hide');


//     component.whatToShow(NaN);
//     expect( this.cool.className).toEqual("hide");
//     expect(this.errorOccured.className).toEqual('hide');
//     expect(this.errorOccured2.className).toEqual('hide');
//     expect(this.errorOccured3.className).toEqual('hide');
//     expect(this.errorOccured4.className).toEqual('hide');
    


//   });
 
 
  
// });


// /**
//  * Funciton to test hte creation and calling for signup function and calling of its dataservices.
//  */

// describe("LogInComponent", () => {
//   let dataServices: DataService;
//   let http: HttpClient;
//   it("should call #signup in the constructor", () => {
//     let signUp_Spy = spyOn(DataService.prototype, 'signUpUser');

//     dataServices = new DataService(http, null);

//     expect(signUp_Spy).toHaveBeenCalled();
//   });
// });

// import { TestBed, ComponentFixture, async } from "@angular/core/testing";
// import { Observable, from, of, empty } from "rxjs";
// import { DataService } from "../services/data.service";
// import { MatDialog } from '@angular/material';
// import {SignUpComponent} from './sign-up.component';
// import { By } from '@angular/platform-browser';
// import { ControlContainer, FormsModule } from '@angular/forms';
// import { RouterTestingModule } from '@angular/router/testing';
// import { Router } from '@angular/router';
// import { DebugElement } from '@angular/core';

// //Before anything else, test that component is created!
// describe("SignupComponent", () => {
//   let component: SignUpComponent;
//   let fixture: ComponentFixture<SignUpComponent>;
//   let router: Router;
//   let dataService: DataService;
//   let cool:        HTMLElement;
  
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule.withRoutes([
//         {path: 'signup' , component: SignUpComponent
//         }]),FormsModule
//       ],
//       declarations: [ SignUpComponent],
//     });
//     fixture = TestBed.createComponent(SignUpComponent);
//    component = fixture.componentInstance; // BannerComponent test instance
//     cool = fixture.nativeElement.querySelector('progress');
//   });

//   router = TestBed.get(Router);
  
//   // beforeEach(() => {
//   //   fixture = TestBed.createComponent(SignUpComponent);
//   //   component = fixture.componentInstance;
//   //   fixture.detectChanges();
//   //   let mockservice;
//   //  // const comp = new SignUpComponent(dataService,router);
//   // //  mockservice = jasmine.createSpyObj(['route']);
//   // });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
/*
describe("SignupComponent", () => {
  let dataService: DataService;
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let route: any = {
    snapshot: {
      root: {
        children: [
          {
            params: {
              username: String
            }
          }
        ]
      },
      parent: {
        firstChild: {
          routeConfig: {
            path: String
          }
        },
        routeConfig: {
          path: String
        }
      },
      queryParams: {
        ID: String,
        filterBy: String
      }
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes([
          {path: 'signup' , component: SignUpComponent
          }]),FormsModule
        ],
        declarations: [ SignUpComponent],
      })
      .compileComponents();
    dataService = new DataService(null, null);
    component = new SignUpComponent(
      dataService,
      route
    );
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.bar2 = document.querySelector('.secondProgress');
    component.bar3 =  document.querySelector('.thirdProgress');
    component.fs1=  document.querySelector('.fs1');
    component.fs2=  document.querySelector('.fs2');
    component.fs3 =  document.querySelector('.fs3');
    
    const coolelement: HTMLElement = fixture.debugElement.query(By.css('.progress')).nativeElement;
   // component.cool =  coolelement;

    component.errorOccured =  document.querySelector('.errorOccured');
    component.errorOccured2 =  document.querySelector('.errorOccured2');
    component.errorOccured3 =  document.querySelector('.errorOccured3');
    component.errorOccured4 =  document.querySelector('.errorOccured4');
  });
  it(' is Created', () => {
    expect(component).toBeDefined();
   
  //  expect( component.cool.className).toContain("hide");  
  });


describe("redesignDateFormat function", () => {

    it('It should rewrite the date in a new format', () => {
            const result  = component.redesignDateFormat("Sun Jan 01 2011");
            const result2  = component.redesignDateFormat("Sun Feb 01 2011");
            const result3  = component.redesignDateFormat("Sun Jan 01 2011");
            const result4  = component.redesignDateFormat("Sun Jan 01 2011");
            const result5  = component.redesignDateFormat("Sun Feb 01 2011");
            const result6  = component.redesignDateFormat("Sun Mar 01 2011");
            const result7  = component.redesignDateFormat("Mon Apr 01 2011");
            const result8  = component.redesignDateFormat("Tue Apr 02 2011");
            const result9  = component.redesignDateFormat("Wed Apr 03 2011");

            //Test the year
            expect(result).toContain("2011");    
            expect(result2).toContain("2011");    
            expect(result3).toContain("2011");
            //Test the month
            expect(result4).toContain("1");
            expect(result5).toContain("2");
            expect(result6).toContain("3"); 
            //Test the day
            expect(result7).toContain("1");
            expect(result8).toContain("2");
            expect(result9).toContain("3"); 
          });
  });

  describe("whatToShow function", () => {
   
  //component.bar2 =  document.querySelector('.secondProgress');
    

        it('Should redesign the view', () => {
            
            // component.whatToShow(0);
            // expect(component.cool.className).toEqual("show");
            // expect(component.errorOccured.className).toEqual('hide');
            // expect(component.errorOccured2.className).toEqual('hide');
            // expect(component.errorOccured3.className).toEqual('hide');
            // expect(component.errorOccured4.className).toEqual('hide');
            

            // component.whatToShow(1);
            // expect(component.cool.className).toEqual("hide");
            // expect(component.errorOccured.className).toEqual('hide');
            // expect(component.errorOccured2.className).toEqual('show');
            // expect(component.errorOccured3.className).toEqual('hide');
            // expect(component.errorOccured4.className).toEqual('hide');
            
            // component.whatToShow(2);
            // expect(component.cool.className).toEqual("hide");
            // expect(component.errorOccured.className).toEqual('hide');
            // expect(component.errorOccured2.className).toEqual('hide');
            // expect(component.errorOccured3.className).toEqual('show');
            // expect(component.errorOccured4.className).toEqual('hide');
            


            // component.whatToShow(3);
            // expect(component.cool.className).toEqual("hide");
            // expect(component.errorOccured.className).toEqual('hide');
            // expect(component.errorOccured2.className).toEqual('hide');
            // expect(component.errorOccured3.className).toEqual('hide');
            // expect(component.errorOccured4.className).toEqual('show');
            

            // component.whatToShow(4);
            // expect( component.cool.className).toEqual("hide");
            // expect(component.errorOccured.className).toEqual('show');
            // expect(component.errorOccured2.className).toEqual('hide');
            // expect(component.errorOccured3.className).toEqual('hide');
            // expect(component.errorOccured4.className).toEqual('hide');


            // component.whatToShow(NaN);
            // expect( component.cool.className).toEqual("hide");
            // expect(component.errorOccured.className).toEqual('hide');
            // expect(component.errorOccured2.className).toEqual('hide');
            // expect(component.errorOccured3.className).toEqual('hide');
            // expect(component.errorOccured4.className).toEqual('hide');
            


        });

  });


});
*/
