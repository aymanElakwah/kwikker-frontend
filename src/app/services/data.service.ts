import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpClient,
  HttpParams,
  HttpHeaders
} from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Conversation } from '../model/inbox';
import { Notification } from '../model/notification';
import { User } from '../model/user';
import { Trend } from '../model/Trend';
import { Kweek } from '../model/kweek';
import { MiniUser } from '../model/mini-user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // private base: String = 'http://faa34478.ngrok.io';
  // constructor(private http: HttpClient) {}

  
  private base: String = 'http://8978be66.ngrok.io/';
  constructor(private http: HttpClient) { }

   /**
   * get request to get All information about certain user
   * @param userName {string} the user that we want to get his Information
   * @returns User Model
   */
  getProfileInfo(userName: string): Observable<User> {
    const userNameSent = userName
      ? { params: new HttpParams().set('username', userName) }
      : {};
    return this.http
      .get<User>(`${this.base}user/profile`, userNameSent)
      .pipe(catchError(this.handleError));
  }

  /**
   * get request to get All Kweeks made by a certain user
   * @param userName {string} the user that we want to get his kweeks
   * @param lastRetrivedId {string} sends the last kweek id to git
   * newer kweeks after it and also could be null
   * @returns array of Kweeks
   */
  getUserKweeks(userName: string, lastRetrivedId: string): Observable<Kweek[]> {
    const parametersSent = lastRetrivedId
      ? {
          params: new HttpParams().set(
            'last_retrieved_trend_id',
            lastRetrivedId
          )
        }
      : {};

    if (userName) {
      parametersSent.params.append('username', userName);
    }

    return this.http
      .get<Kweek[]>(`${this.base}kweeks/timelines/profile`, parametersSent)
      .pipe(catchError(this.handleError));
  }

  /**
   * get request to get All Liked Kweeks by a certain user
   * @param userName {string} the user that we want to get his liked kweeks
   * @param lastRetrivedId {string} sends the last kweek id to git
   * newer kweeks after it and also could be null
   * @returns array of Kweeks
   */
  getUserLikedKweeks(
    userName: string,
    lastRetrivedId: string
  ): Observable<Kweek[]> {
    const parametersSent = userName
      ? { params: new HttpParams().set('username', userName) }
      : {};

    if (lastRetrivedId) {
      parametersSent.params.append('last_retrieved_trend_id', lastRetrivedId);
    }

    return this.http
      .get<Kweek[]>(`${this.base}kweeks/user/liked`, parametersSent)
      .pipe(catchError(this.handleError));
  }

  /**
   * get request to have little information about The users that follow the authorized user
   * No Parameters
   * @returns array of MiniUsers
   */
  getUserFollowers(): Observable<MiniUser[]> {
    return this.http
      .get<MiniUser[]>(`${this.base}interactions/followers`)
      .pipe(catchError(this.handleError));
  }

  /**
   * get request to have little information about The users that the authorized user follow
   * No Parameters
   * @returns array of MiniUsers
   */
  getUserFollowings(): Observable<MiniUser[]> {
    return this.http
      .get<MiniUser[]>(`${this.base}interactions/following`)
      .pipe(catchError(this.handleError));
  }

  /**
   * get kweeks from in memory data service to test the kweeks
   * No Parameters
   * @returns array of kweeks
  */
  getKweeks(): Observable<Kweek[]> {
    return this.http
      .get<Kweek[]>('api/KWK')
      .pipe(catchError(this.handleError));
  }

  /**
   * get request to have the highest 10 Trends
   * No Parameters
   * @returns array of Trends
   */
  getTrends(): Observable<Trend[]> {
    params: new HttpParams().set('last_retrieved_trend_id', null);
    return this.http
      .get<Trend[]>(`${this.base}trends/`)
      .pipe(catchError(this.handleError));
  }

  /**
   * get all conversation for user
   */
  getConverstations(): Observable<Conversation[]> {
    return this.http
      .get<Conversation[]>('api/Message')
      .pipe(catchError(this.handleError));
  }

  /**
   *
   * to get request to get the latest notification
   * @param last_notifications_retrieved_id {string} sends the last notification id to git
   * newer notifications after it and also could be null
   * @returns array of notifications
   */
  getNotificationsList(
    last_notifications_retrieved_id: string
  ): Observable<Notification[]> {
    const options = last_notifications_retrieved_id
      ? {
          params: new HttpParams().set(
            'last_notifications_retrieved_id',
            last_notifications_retrieved_id
          )
        }
      : {};
    return this.http
      .get<Notification[]>(this.base + 'notifications', options)
      .pipe(
        catchError(this.handleError) // code 401 -> Unauthorized access.
      );
  }

  /**
   *  handle any error code returned from backend server
   * @param error this paramter cathces any error response returned
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      switch (error.status) {
        case 404:
          console.error('not found');
          break;
        case 401:
          console.error('unauthorized');
          break;
      }
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  /**
   *
   * to post user's name and user's password
   * @param user {object} sends the user information to get
   * token after it and also could be null
   * @returns string
   */
   logInUser(user: any): Observable <any> {
    const body = JSON.stringify(user);
    const headers = {headers: new HttpHeaders({'Content-Type' : 'application/json'})};
    return this.http.post<any>(this.base + 'account/login', body, headers)
                              .pipe(
                              map(res => res),
                              catchError(this.handleError)
                              );
  }
}
