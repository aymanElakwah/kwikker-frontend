import {  ComponentFixture } from '@angular/core/testing';
import { WelcomeComponent } from './welcome.component';
describe('Welcome Component', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
   let route: any = {
    snapshot: {
      root: {
        children: [
          {
            params: {
              username: String
            }
          }
        ]
      },
      url:[
        {
            path: String
        }
      ],
      queryParams: {
        filterBy: String
      }
    }
  };
  beforeEach(() => {
    component = new WelcomeComponent(route);

    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
