import { Injectable } from '@angular/core';
import {HttpInterceptor , HttpRequest , HttpHandler , HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable( )
export class AddTokenInterceptor implements HttpInterceptor {
    token: string;
    intercept(req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
        this.token = localStorage.getItem('TOKEN');
        const jsonReq: HttpRequest<any> = req.clone({
            setHeaders: {'Content-Type': 'application/json' , 'TOKEN': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwiZXhwIjoxNTUzMTk4NDM2fQ.FWYgJXVHB-C4joR-CdQ1hbAa4RGO1L7IvShOEgk4444' }
        });
        return next.handle(jsonReq);
    }

}
