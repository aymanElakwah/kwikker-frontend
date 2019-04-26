import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { MainProfileComponent } from './main-profile.component';
import { SharedModule } from '../../shared/shared.module';
import { ProfileModule } from '../profile.module';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('MainProfileComponent', () => {
  let component: MainProfileComponent;
  let fixture: ComponentFixture<MainProfileComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, ProfileModule, RouterTestingModule.withRoutes([
        { path: 'profile/:username', component:  MainProfileComponent}
/*         children: [
          {path: '', component: ProfileKweeksTabComponent } ,   
          {path: 'kweeks', component: ProfileKweeksTabComponent},
          {path: 'following', component: MiniProfileComponent },
          {path: 'followers', component: MiniProfileComponent },
          {path: 'likes', component: ProfileKweeksTabComponent },
        ]} */ ])],
      declarations: [],
      providers: [ ]
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

  it('should toggle(Mute)', () => {
    const muted = component.profileUser.muted;
    component.toggleMute();
    expect( component.profileUser.muted ).toBe(!muted);
  });

  it('should toggle(Block)', () => {
    const blocked = component.profileUser.blocked;
    component.toggleBlock();
    expect( component.profileUser.blocked ).toBe(!blocked);
  });

  it('should toggle(semi-blocked Mode)', () => {
    const semiBlockedMode = component.semiBlockedMode;
    component.togglesemiBlockedMode();
    expect( component.semiBlockedMode ).toBe(!semiBlockedMode);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

