import {  ComponentFixture } from '@angular/core/testing';
import { DataService } from '../services/data.service';
import { HttpClient, HttpErrorResponse,  HttpParams,  HttpHeaders } from '@angular/common/http';
import { CacheService } from '../services/cache.service';
import { confirmPassword } from './reset-password-confirm.component';
import { ActivatedRoute } from '@angular/router';

/**
 * Describe funciton to test confirm email component.
 */
describe('Password confirmation code Component', () => {
  let component: confirmPassword;
  let fixture: ComponentFixture<confirmPassword>;
  let dataService: DataService;
  let http: HttpClient;
  let cacheService: CacheService;
  let routes: ActivatedRoute;
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
    dataService = new DataService(http, cacheService,route);
    component = new confirmPassword(dataService,route,routes);

    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
