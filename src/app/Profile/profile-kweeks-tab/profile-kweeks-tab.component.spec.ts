import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '../../shared/shared.module';
import { ProfileModule } from '../profile.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ProfileKweeksTabComponent } from './profile-kweeks-tab.component';

describe('ProfileKweeksTabComponent', () => {
  let component: ProfileKweeksTabComponent;
  let fixture: ComponentFixture<ProfileKweeksTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule,ProfileModule, RouterTestingModule.withRoutes([
        { path: 'profile/:username/kweeks', component: ProfileKweeksTabComponent }])],
      declarations: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileKweeksTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //It isn't fully implemented yet
/*   it('should create', () => {
    expect(component).toBeTruthy();
  }); */
});
