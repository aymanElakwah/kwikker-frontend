import { Injectable } from '@angular/core';
import {HttpInterceptor , HttpRequest , HttpHandler , HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable( )
export class AddTokenInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
        const jsonReq: HttpRequest<any> = req.clone({
            setHeaders: {'Content-Type': 'application/json' , 'tokens': '21312312'}
        });
        return next.handle(jsonReq);
    }

}
