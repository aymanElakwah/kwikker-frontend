import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileKweeksTabComponent } from './profile-kweeks-tab.component';

describe('ProfileKweeksTabComponent', () => {
  let component: ProfileKweeksTabComponent;
  let fixture: ComponentFixture<ProfileKweeksTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileKweeksTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileKweeksTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
