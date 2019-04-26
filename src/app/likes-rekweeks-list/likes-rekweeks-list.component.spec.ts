import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikesRekweeksListComponent } from './likes-rekweeks-list.component';

describe('LikesRekweeksListComponent', () => {
  let component: LikesRekweeksListComponent;
  let fixture: ComponentFixture<LikesRekweeksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikesRekweeksListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikesRekweeksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
