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
