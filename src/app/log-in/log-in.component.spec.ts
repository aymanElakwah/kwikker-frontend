import {  ComponentFixture } from '@angular/core/testing';
import { DataService } from '../services/data.service';
import { LogInComponent } from './log-in.component';
import { HttpClient, HttpErrorResponse,  HttpParams,  HttpHeaders } from '@angular/common/http';
import { CacheService } from '../services/cache.service';
describe('Login Component', () => {
  let component: LogInComponent;
  let fixture: ComponentFixture<LogInComponent>;
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
    component = new LogInComponent(dataService,route);

    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
