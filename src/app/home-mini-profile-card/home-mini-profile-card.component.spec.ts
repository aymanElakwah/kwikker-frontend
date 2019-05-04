import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMiniProfileCardComponent } from './home-mini-profile-card.component';

describe('HomeMiniProfileCardComponent', () => {
  let component: HomeMiniProfileCardComponent;
  let fixture: ComponentFixture<HomeMiniProfileCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMiniProfileCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMiniProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
