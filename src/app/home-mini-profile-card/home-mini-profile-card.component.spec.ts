import { HomeMiniProfileCardComponent } from './home-mini-profile-card.component';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

describe('HomeMiniProfileCardComponent', () => {
  let component: HomeMiniProfileCardComponent;
  let data: DataService; 
  let router: Router;

  beforeEach(() => {
    component = new HomeMiniProfileCardComponent(data, router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
