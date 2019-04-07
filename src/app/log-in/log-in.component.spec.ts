import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from '../services/data.service';
import { LogInComponent } from './log-in.component';
import { HttpClient } from '@angular/common/http';

describe("LogInComponent", () => {
  console.log('ev');
    let logInComponent: DataService;
    let http: HttpClient;
    it("should call #logInUser in the constructor", () => {
        let LogIn_Spy = spyOn(DataService.prototype, 'logInUser');

        logInComponent = new DataService(http);

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
