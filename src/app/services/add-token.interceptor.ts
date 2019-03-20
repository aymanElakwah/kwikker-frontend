import { Injectable } from '@angular/core';
import {HttpInterceptor , HttpRequest , HttpHandler , HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable( )
export class AddTokenInterceptor implements HttpInterceptor {
    token: string;
    intercept(req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
        this.token = localStorage.getItem('token');
        const jsonReq: HttpRequest<any> = req.clone({
            setHeaders: {'Content-Type': 'application/json' , 'tokens': `${this.token}` }
        });
        return next.handle(jsonReq);
    }

}
