import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from '../services/data.service';
import { LogInComponent } from './log-in.component';
import { HttpClient } from '@angular/common/http';

describe("LogInComponent", () => {
    let logInComponent: DataService;
    let http: HttpClient;
    it("should call #logInUser in the constructor", () => {
        let LogIn_Spy = spyOn(DataService.prototype, 'logInUser');

        logInComponent = new DataService(http, null);

        expect(LogIn_Spy).toHaveBeenCalled();
    });

});
describe('LogInComponent', () => {
  let component: LogInComponent;
  let fixture: ComponentFixture<LogInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/**
 * Test function to test showErrorMsg(type: number) function
 * If given 1--> shows the first error message
 * If given 2--> shows the second error message 
 */
describe('LogInComponent', () => {
  let component: LogInComponent;
  let fixture: ComponentFixture<LogInComponent>;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
 it('should redesign the view', () => {
    component.showErrorMSg(1);
    expect( this.msg.className).toEqual("show");
    expect(this.msg2.className).toEqual('hide');
    component.showErrorMSg(2);
    expect( this.msg.className).toEqual("hide");
    expect(this.msg2.className).toEqual('show');
    component.showErrorMSg(NaN);
    expect( this.cool.className).toEqual("hide");
    expect(this.errorOccured.className).toEqual('hide');
  });
 
 
  
});


