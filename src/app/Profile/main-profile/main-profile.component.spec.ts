import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { MainProfileComponent } from './main-profile.component';
import { By } from '@angular/platform-browser';

describe('MainProfileComponent', () => {
  let component: MainProfileComponent;
  let fixture: ComponentFixture<MainProfileComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => 
  {
    TestBed.configureTestingModule({
      declarations: [MainProfileComponent]
    }).compileComponents();
  }));

  beforeEach(()=> {
    fixture = TestBed.createComponent(MainProfileComponent);
    component = fixture.componentInstance;
  });

  it('should toggle(EditingMode)', () => {
    expect( component.isEditingMode).toBeFalsy();
    component.toggleEditingMode();
    expect( component.isEditingMode).toBeTruthy();
  });

  it('should toggle(Follow)', () => {
    expect( component.profileUser.following ).toBeFalsy();
    component.toggleFollow();
    expect( component.profileUser.following ).toBeTruthy();
  });

  it('should toggle(Mute)', () => {
    expect( component.profileUser.muted ).toBeFalsy();
    component.toggleMute();
    expect( component.profileUser.muted ).toBeTruthy();
    expect( debugElement.query(By.css('.Msg')).nativeElement.innerText)
    .toBe("You will no longer receive notification from @" + this.profileUser.screen_name);
  });

  it('should toggle(Block)', () => {
    expect( component.profileUser.blocked ).toBeFalsy();
    component.toggleBlock();
    expect( component.profileUser.blocked ).toBeTruthy();
    expect( debugElement.query(By.css('.Msg')).nativeElement.innerText)
    .toBe("@" + this.profileUser.screen_name + " has been blocked");
  });

  it('should toggle(semi-blocked Mode)', () => {
    expect( component.semiBlockedMode ).toBeFalsy();
    component.togglesemiBlockedMode();
    expect( component.semiBlockedMode ).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

})

