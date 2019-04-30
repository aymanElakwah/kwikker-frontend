import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { Router } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Route } from '@angular/compiler/src/core';
import { FormsModule } from '@angular/forms';

describe('SearchComponent', () => {
  /*
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  // tslint:disable-next-line:prefer-const
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
        {path: 'home' , component: SearchComponent
        }]),FormsModule
      ],
      declarations: [ SearchComponent,
      NavBarComponent ],
    })
    .compileComponents();
  }));
  router = TestBed.get(Router);
  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    let mockservice;
    const comp = new SearchComponent(mockservice, mockservice, mockservice);
    mockservice = jasmine.createSpyObj(['route']);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should detect arabic serach', () => {
    component.search = 'عربي';
    component.arabic = /[\u0600-\u06FF]/;
    component.testSearchingParams();
    expect(component.ltr).toBe(false);
  });

  it('should only work with right parameters', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.search = '';
    component.testSearchingParams();
    expect(navigateSpy).toHaveBeenCalledWith(['/home']);
  });
*/
});
