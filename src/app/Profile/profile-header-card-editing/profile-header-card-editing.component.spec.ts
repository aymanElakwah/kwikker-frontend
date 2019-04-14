import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHeaderCardEditingComponent } from './profile-header-card-editing.component';

describe('ProfileHeaderCardEditingComponent', () => {
  let component: ProfileHeaderCardEditingComponent;
  let fixture: ComponentFixture<ProfileHeaderCardEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileHeaderCardEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileHeaderCardEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
