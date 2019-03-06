import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KweekComponent } from './kweek.component';

describe('KweekComponent', () => {
  let component: KweekComponent;
  let fixture: ComponentFixture<KweekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KweekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KweekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
