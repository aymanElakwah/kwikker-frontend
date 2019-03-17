import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient, HttpParams } from '@angular/common/http';
import { throwError , Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../model/user';
import { Trend } from '../model/Trend';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getProfileInfo(userName: string): Observable<User> {
    const userNameSent = userName ?
     { params: new HttpParams().set('username', userName) } : {};
    return this.http.get<User>('api/profileUserTest', userNameSent)
      .pipe(
        catchError(this.handleError)
      );
  }

  getTrends(): Observable<Trend[]> {
    return this.http.get<Trend[]>('api/trendsTest')
      .pipe(
        catchError(this.handleError)
      );
  }

  // example for using get with jason file
  getNumber(name: string): Observable<number> {
    const options = name ?
     { params: new HttpParams().set('name', name) } : {};
    return this.http.get<number>('api/test', options)
      .pipe(
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
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
