import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikersListComponent } from './likers-list.component';

describe('LikersListComponent', () => {
  let component: LikersListComponent;
  let fixture: ComponentFixture<LikersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
