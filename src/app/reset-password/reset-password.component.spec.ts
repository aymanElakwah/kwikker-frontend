import {  ComponentFixture } from '@angular/core/testing';
import { DataService } from '../services/data.service';
import { HttpClient, HttpErrorResponse,  HttpParams,  HttpHeaders } from '@angular/common/http';
import { CacheService } from '../services/cache.service';
import { ActivatedRoute } from '@angular/router';
import { ResetPasswordComponent } from './reset-password.component';

/**
 * Describe funciton to test reset password component.
 */
describe('Reset password Component', () => {
  let component: ResetPasswordComponent;
  let fixture: ComponentFixture<ResetPasswordComponent>;
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
    component = new ResetPasswordComponent(dataService,route);

    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
