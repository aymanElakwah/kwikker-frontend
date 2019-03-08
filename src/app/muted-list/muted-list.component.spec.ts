import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutedListComponent } from './muted-list.component';

describe('MutedListComponent', () => {
  let component: MutedListComponent;
  let fixture: ComponentFixture<MutedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
