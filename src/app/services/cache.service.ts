import {Injectable } from '@angular/core';
import {HttpResponse} from '@angular/common/http';

/**
 * cacheing responses for decreasing traffic with backend
 */
@Injectable({
    providedIn: 'root'
})
export class CacheService {
    private requests: any = { };
    /**
     * no need for injecting services
     */
    constructor() {}
    /**
     * saving backend responses
     * @param url requested api url
     * @param response returned response that will be cached
     */
    put (url: string , response: HttpResponse<any>): void {
        this.requests[url] = response;
    }
    /**
     * get cached data back
     * @param url requested backend url
     */
    get(url: string ): HttpResponse<any> | undefined {
        return this.requests[url];
    }

    /**
     * remove cached data
     * @param url requested backend url
     */
    invalidateUrl (url: string ): void {
        this.requests[url] = undefined;
    }
    /**
     * remove cached request
     */
    invalidateCache (): void {
        this.requests = {};
    }
}
