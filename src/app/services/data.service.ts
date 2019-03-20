import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { throwError , Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Conversation } from '../model/inbox';
import { Notification } from '../model/notification';
import { User } from '../model/user';
import { Trend } from '../model/Trend';
import { Kweek } from '../model/kweek';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private base: String = 'https://162c828c.ngrok.io/';
  constructor(private http: HttpClient) { }

  getProfileInfo(userName: string): Observable<User> {
    const userNameSent = userName ?
     { params: new HttpParams().set('username', userName) } : {};
    return this.http.get<User>(this.base + '', userNameSent)
      .pipe(
        catchError(this.handleError)
      );
  }

  getKweeks(userName: string, pagenation: string): Observable<Kweek[]> {
    const options = userName ?
     { params: new HttpParams().set('username', userName) } : {};
     if ( options) {
      options.params.append('pagenation', pagenation );
     }
    return this.http.get<Kweek[]>('api/KWK', options)
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

  getConverstations(): Observable<Conversation[]> {
      return this.http.get<Conversation[]>('api/Message').pipe(
        catchError(this.handleError)
      );
  }
  /**
   *
   * to get request to get the latest notification
   * @param last_notifications_retrieved_id {string} sends the last notification id to git
   * newer notifications after it and also could be null
   * @returns array of notifications
   */
  getNotificationsList(last_notifications_retrieved_id: string): Observable<Notification[]> {
    const options = last_notifications_retrieved_id ?
     { params: new HttpParams().set('last_notifications_retrieved_id', last_notifications_retrieved_id) } : {};
    return this.http.get<Notification[]>(this.base + 'notifications', options)
      .pipe(
        catchError(this.handleError) // code 401 -> Unauthorized access.
      );
  }


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



   /**
   *
   * to post user's name and user's password
   * @param user {object} sends the user information to get
   * token after it and also could be null
   * @returns string
   */
   logInUser(user: any): Observable <any> {
    // console.log(user);
    const body = JSON.stringify(user);
    console.log(body);
    const headers = {headers: new HttpHeaders({'Content-Type' : 'application/json'})};
    return this.http.post<any>(this.base + 'account/login', body, headers)
                              .pipe(
                              map(res => res),
                              catchError(this.handleError)
                              );
  }
}
