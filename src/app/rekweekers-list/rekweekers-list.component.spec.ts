import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RekweekersListComponent } from './rekweekers-list.component';

describe('RekweekersListComponent', () => {
  let component: RekweekersListComponent;
  let fixture: ComponentFixture<RekweekersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RekweekersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RekweekersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
