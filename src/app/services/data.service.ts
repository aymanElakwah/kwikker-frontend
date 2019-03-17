import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient, HttpParams } from '@angular/common/http';
import { throwError , Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Conversation } from '../model/inbox';
import { BrowserStack } from 'protractor/built/driverProviders';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  base = ' ';
  constructor(private http: HttpClient) { }

  // example for using get with jason file
  getNumber(name: string): Observable<number> {
    const options = name ?
     { params: new HttpParams().set('name', name) } : {};
    return this.http.get<number>('api/test', options)
      .pipe(
        catchError(this.handleError)
      );
  }

  getConverstations(): Observable<Conversation[]> {
      return this.http.get<Conversation[]>(`${this.base}direct_message/conversations `).pipe(
        catchError(this.handleError)
      );
  }
  // use retry func
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      switch ( error.status)  {
      case(404):
        console.error('not found');
        break ;
        case(401):
          console.error('unauthorized');
        break ;
      }
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
