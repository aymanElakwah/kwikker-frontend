import {Injectable } from '@angular/core';
import {HttpEvent , HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable , of } from 'rxjs';
import {tap } from 'rxjs/operators';

import {CacheService} from '../services/cache.service';
/**
 * calls cacheing service to cache data as much as it can
 */
@Injectable( )
export class CacheInterceptor implements HttpInterceptor {
    /**
     *
     * @param HttpCacheService inject cache service where actual work is done
     */
    constructor (private HttpCacheService: CacheService) { }
    /**
     * to intercept all requests
     * @param req out request
     * @param next modifed request
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if ( req.method !== 'GET' ) {
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
