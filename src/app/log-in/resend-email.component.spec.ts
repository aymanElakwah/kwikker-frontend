import {  ComponentFixture } from '@angular/core/testing';
import { DataService } from '../services/data.service';
import { HttpClient, HttpErrorResponse,  HttpParams,  HttpHeaders } from '@angular/common/http';
import { CacheService } from '../services/cache.service';
import { ResendEmailComponent } from './resend-email.component';

/**
 * Describe funciton to test ResendEmail component.
 */
describe('Resen-Email Component', () => {
  let component: ResendEmailComponent;
  let fixture: ComponentFixture<ResendEmailComponent>;
  let dataService: DataService;
  let http: HttpClient;
  let cacheService: CacheService;
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
    component = new ResendEmailComponent(dataService,route);

    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
