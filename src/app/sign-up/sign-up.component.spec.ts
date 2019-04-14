import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a valid date', () => {
    const result  = component.redesignDateFormat("Sun Jan 01 2011");
    const result2  = component.redesignDateFormat("Sun Feb 01 2011");
    const result3  = component.redesignDateFormat("Sun Jan 01 2011");
    expect(result).toContain("2011");    
    expect(result2).toContain("2011");    
    expect(result3).toContain("2011");    


  });
 it('should redesign the view', () => {
    component.whatToShow(0);
    expect( this.cool.className).toEqual("show");
    expect(this.errorOccured.className).toEqual('hide');
    component.whatToShow(1);
    expect( this.cool.className).toEqual("hide");
    expect(this.errorOccured.className).toEqual('show');
    component.whatToShow(NaN);
    expect( this.cool.className).toEqual("hide");
    expect(this.errorOccured.className).toEqual('hide');
  });
 
 
  
});




describe("LogInComponent", () => {
  let dataServices: DataService;
  let http: HttpClient;
  it("should call #signup in the constructor", () => {
    let signUp_Spy = spyOn(DataService.prototype, 'signUpUser');

    dataServices = new DataService(http);

    expect(signUp_Spy).toHaveBeenCalled();
  });
});
