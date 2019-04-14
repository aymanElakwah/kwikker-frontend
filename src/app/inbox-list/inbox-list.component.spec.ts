import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '../shared/shared.module';
import { ChatModule } from '../chat/chat.module';
import { RouterTestingModule } from '@angular/router/testing';
import { InboxListComponent } from './inbox-list.component';

describe('InboxListComponent', () => {
  let component: InboxListComponent;
  let fixture: ComponentFixture<InboxListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ChatModule,SharedModule,RouterTestingModule],
      declarations: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
