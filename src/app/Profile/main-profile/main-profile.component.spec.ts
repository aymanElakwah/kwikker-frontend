import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { MainProfileComponent } from './main-profile.component';
import { By } from '@angular/platform-browser';

describe('MainProfileComponent', () => {
  let component: MainProfileComponent;
  let fixture: ComponentFixture<MainProfileComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainProfileComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainProfileComponent);
    component = fixture.componentInstance;
  });

  it('should toggle(EditingMode)', () => {
    const editMode = component.isEditingMode;
    component.toggleEditingMode();
    expect( component.isEditingMode).toBe(!editMode);
  });

  it('should toggle(Follow)', () => {
    const following = component.profileUser.following;
    component.toggleEditingMode();
    expect( component.profileUser.following ).toBe(!following);
  });

  it('should toggle(Mute)', () => {
    const muted = component.profileUser.muted;
    component.toggleEditingMode();
    expect( component.profileUser.muted ).toBe(!muted);
    expect( debugElement.query(By.css('.Msg')).nativeElement.innerText)
    .toBe('You will no longer receive notification from @' + this.profileUser.screen_name);
  });

  it('should toggle(Block)', () => {
    const blocked = component.profileUser.blocked;
    component.toggleEditingMode();
    expect( component.profileUser.blocked ).toBe(!blocked);
    expect( debugElement.query(By.css('.Msg')).nativeElement.innerText)
    .toBe('@' + this.profileUser.screen_name + ' has been blocked');
  });

  it('should toggle(semi-blocked Mode)', () => {
    const semiBlockedMode = component.semiBlockedMode;
    component.toggleEditingMode();
    expect( component.semiBlockedMode ).toBe(!semiBlockedMode);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

