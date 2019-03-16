import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHeaderCardComponent } from './profile-header-card.component';

describe('ProfileHeaderCardComponent', () => {
  let component: ProfileHeaderCardComponent;
  let fixture: ComponentFixture<ProfileHeaderCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileHeaderCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileHeaderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
