import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHeaderCardComponent } from './profile-header-card.component';

describe('ProfileHeaderCardComponent', () => {
  let component: ProfileHeaderCardComponent;
 
  beforeEach(() => {
    component = new ProfileHeaderCardComponent(
      null,
      null
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
