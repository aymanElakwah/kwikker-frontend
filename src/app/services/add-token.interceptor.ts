import { Injectable } from '@angular/core';
import {HttpInterceptor , HttpRequest , HttpHandler , HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable( )
export class AddTokenInterceptor implements HttpInterceptor {
    token: string;
    intercept(req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
        this.token = localStorage.getItem('TOKEN');
        if ( req.url === 'http://0d977716.ngrok.io/account/login') {
            return next.handle(req);
        }
        const jsonReq: HttpRequest<any> = req.clone({
            setHeaders: {'Content-Type': 'application/json' , 'TOKEN': `${this.token}` }
        });
        return next.handle(jsonReq);
    }

}
