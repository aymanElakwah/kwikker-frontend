import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '../../shared/shared.module';
import { ProfileModule } from '../profile.module';
import { RouterTestingModule } from '@angular/router/testing';
import { MiniProfileComponent } from './mini-profile.component';

describe('MiniProfileComponent', () => {
  let component: MiniProfileComponent;
  let fixture: ComponentFixture<MiniProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule,ProfileModule, RouterTestingModule.withRoutes([
        { path: 'profile/:username/followers', component:  MiniProfileComponent }])],
      declarations: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
