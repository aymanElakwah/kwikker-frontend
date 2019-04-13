import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewKweekComponent } from './new-kweek.component';

describe('NewKweekComponent', () => {
  let component: NewKweekComponent;
  let fixture: ComponentFixture<NewKweekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewKweekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewKweekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
