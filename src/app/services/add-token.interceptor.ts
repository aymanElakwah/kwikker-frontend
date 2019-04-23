import { Injectable } from '@angular/core';
import {HttpInterceptor , HttpRequest , HttpHandler , HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';
/**
 * intercept all requests to add tokens
 */
@Injectable( )
export class AddTokenInterceptor implements HttpInterceptor {
    /**
     * user token
     */
    token: string;
    /** */
    formDataRequests=[];
    /**
     * add tokens for all requests except log in and sign up
     * @param req out request
     * @param next modifed request
     */
    intercept(req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
        this.token = localStorage.getItem('TOKEN');
        let jsonReq: HttpRequest<any>;
        if(this.formDataRequests[req.url] == undefined ) {
        jsonReq= req.clone({
            setHeaders: {'Content-Type': 'application/json' , 'TOKEN': `${this.token}` }
        });
        } else {
            jsonReq= req.clone({
                setHeaders: { 'TOKEN': `${this.token}` }
            });
        }
        return next.handle(jsonReq);
    }

}