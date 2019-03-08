import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedListComponent } from './blocked-list.component';

describe('BlockedListComponent', () => {
  let component: BlockedListComponent;
  let fixture: ComponentFixture<BlockedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
