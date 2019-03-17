import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentionslistComponent } from './mentionslist.component';

describe('MentionslistComponent', () => {
  let component: MentionslistComponent;
  let fixture: ComponentFixture<MentionslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentionslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentionslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
