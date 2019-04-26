import {Injectable } from '@angular/core';
import {HttpEvent , HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable , of } from 'rxjs';
import {tap } from 'rxjs/operators';

import {CacheService} from '../services/cache.service';
import { environment } from 'src/environments/environment';
/**
 * calls cacheing service to cache data as much as it can
 */
@Injectable( )
export class CacheInterceptor implements HttpInterceptor {
    /**
     * all cached requests in the website
     */
    requestsUrl = [
      //  environment.base+'interactions/blocks',
      //  environment.base+'interactions/mutes'

    ];
    requestsUrlWithParams = [
       /* { 
            url:environment.base+'kweeks/timelines/profile',
            params: localStorage.getItem('username')   
        },
        {
            url:environment.base+'interactions/following',
            params: localStorage.getItem('username')   
        },
        {
            url:environment.base+'user/profile',
            params: localStorage.getItem('username') 
        }
        */
    ];
    cachedRequest = false;
    /**
     *
     * @param HttpCacheService inject cache service where actual work is done
     */
    constructor (private HttpCacheService: CacheService) {

     }
    /**
     * to intercept all requests
     * @param req out request
     * @param next modifed request
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.requestsUrl.forEach(element => {
            if(element === req.url) {
                this.cachedRequest = true;
            }
        });
        this.requestsUrlWithParams.forEach(element => {
            if(element.url === req.url && element.params === req.params.get('username')) {
                this.cachedRequest = true;
            }
        });
        if ( req.method !== 'GET' || !this.cachedRequest ) {
       return next.handle(req);
    }
    const cachedResponse: HttpResponse<any> = this.HttpCacheService.get(req.url);

    if ( cachedResponse) {
        return of(cachedResponse);
    }
    return next.handle(req).pipe(
        tap(event => {
            if ( event instanceof HttpResponse) {
                this.HttpCacheService.put(req.url, event);
            }
        })
    );
    }
}
