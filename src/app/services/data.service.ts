import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpClient,
  HttpParams,
  HttpHeaders} from '@angular/common/http';
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
   /**
   * Backend server base
   */
  private base: String = 'http://kwikkerbackend.eu-central-1.elasticbeanstalk.com/';

  /**
   *
   * @param http component to send requests
   */
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
    const parametersSent = {params: new HttpParams().set('last_retrieved_kweek_id', lastRetrivedId).set('username', userName)};
    return this.http
      .get<Kweek[]>(`${this.base}kweeks/timelines/profile`, parametersSent)
      .pipe(catchError(this.handleError));
  }

  /**
   * get request to get All Replies of a kweek
   * @param kweekId {string} the kweek that we want to get its replies
   * @returns array of Kweeks
  */
  getKweekReplies(kweekId: string): Observable<Kweek[]> {
    const parametersSent = kweekId
      ? {
          params: new HttpParams().set('reply_to', kweekId)
        }
      : {};
    return this.http
      .get<Kweek[]>(`${this.base}kweeks/replies`, parametersSent)
      .pipe(catchError(this.handleError));
  }

  /**
   * like or unlike tweet depend on the user if he liked or not like this kweek
   * @param id {string} of kweek that we want to like or unlike
   * @returns observable
  */
  likeOrUnlikeKweek(id: string): Observable<any> {
    return this.http.post<any>(`${this.base}kweeks/like`, id).pipe(
      map(res => res),
      catchError(this.handleError)
    );
  }

  /**
   * rekweek or unrekweek tweet depend on the user if he rekweeked or not rekweeked this kweek
   * @param id {string} of kweek that we want to rekweek or unrekweek
   * @returns observable
  */
  rekweekOrUnrekweekKweek(id: string): Observable<any> {
    return this.http.post<any>(`${this.base}kweeks/rekweek`, id).pipe(
      map(res => res),
      catchError(this.handleError)
    );
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
    return this.http.get<Kweek[]>('api/KWK').pipe(catchError(this.handleError));
  }

  /**
   * get replies from in memory data service to test the replies
   * No Parameters
   * @returns array of replies
   */
  getReplies1(): Observable<Kweek[]> {
    return this.http
      .get<Kweek[]>('api/REPLY1')
      .pipe(catchError(this.handleError));
  }

  /**
   * get replies from in memory data service to test the replies
   * No Parameters
   * @returns array of replies
   */
  getReplies2(): Observable<Kweek[]> {
    return this.http
      .get<Kweek[]>('api/REPLY2')
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
      .get<Conversation[]>('`${this.base}direct_message/conversations`')
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
   * get first 20 users that contain filter by substring
   * @param filterBy used to filter search
   */
  searchUsers(filterBy: string ): Observable<MiniUser[]> {
    const options = filterBy
      ? {
          params: new HttpParams().set(
            'search_text',
            filterBy
          )
        }
      : {};
   return this.http.get<MiniUser[]>(`${this.base}search/users`, options);
  }
  /**
   * send messages and photos in chat
   * @param message written message by user
   */
  createMessage(message) {
    return this.http.post(`${this.base}direct_message/`, message);
  }
    getRecentConversations(): Observable<MiniUser[]> {
      return this.http.get<MiniUser[]>(`${this.base}direct_message/recent_conversationers`);
    }
  /**
   *
   * to post user's name and user's password
   * @param user {object} sends the user information to get
   * token after it and also could be null
   * @returns string
   */
  logInUser(user: any): Observable<any> {
    const body = JSON.stringify(user);
    const headers = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<any>(this.base + 'account/login', body, headers).pipe(
      map(res => res),
      catchError(this.handleError)
    );
  }
  /**
   * Post request make the authorised user follow Some user
   * @param userName {string} The userName that will be followed
   * @returns Request Response
   */
  followUser(userName: string): Observable<any> {
    const paramsSent = { params: new HttpParams().set('username', userName) };
    return this.http
      .post<any>(this.base + 'interactions/follow', paramsSent)
      .pipe(
        map(res => res),
        catchError(this.handleError)
      );
  }

  /**
   * Delete request make the authorised user unfollow Some user
   * @param userName {string} The userName that will be unfollowed
   * @returns Request Response
   */

  unfollowUser(userName: string): Observable<any> {
    const paramsSent = { params: new HttpParams().set('username', userName) };
    return this.http
      .delete<any>(this.base + 'interactions/follow', paramsSent)
      .pipe(
        map(res => res),
        catchError(this.handleError)
      );
  }

  /**
   * Post request make the authorised user mute Some user
   * @param userName {string} The userName that will be muted
   * @returns Request Response
   */
  muteUser(userName: string): Observable<any> {
    const paramsSent = { params: new HttpParams().set('username', userName) };
    return this.http
      .post<any>(this.base + 'interactions/mutes', paramsSent)
      .pipe(
        map(res => res),
        catchError(this.handleError)
      );
  }

  /**
   * Delete request make the authorised user unmute Some user
   * @param userName {string} The userName that will be unmuted
   * @returns Request Response
   */
  unmuteUser(userName: string): Observable<any> {
    const paramsSent = { params: new HttpParams().set('username', userName) };
    return this.http
      .delete<any>(this.base + 'interactions/mutes', paramsSent)
      .pipe(
        map(res => res),
        catchError(this.handleError)
      );
  }

  /**
   * Post request make the authorised user block Some user
   * @param userName {string} The userName that will be blocked
   * @returns Request Response
   */
  blockUser(userName: string): Observable<any> {
    const paramsSent = { params: new HttpParams().set('username', userName) };
    return this.http
      .post<any>(this.base + 'interactions/blocks', paramsSent)
      .pipe(
        map(res => res),
        catchError(this.handleError)
      );
  }

  /**
   * Delete request make the authorised user unblock Some user
   * @param userName {string} The userName that will be unblocked
   * @returns Request Response
   */
  unblockUser(userName: string): Observable<any> {
    const paramsSent = { params: new HttpParams().set('username', userName) };
    return this.http
      .delete<any>(this.base + 'interactions/blocks', paramsSent)
      .pipe(
        map(res => res),
        catchError(this.handleError)
      );
  }

  /**
   * Patch request To Edit The authorised user Bio or ScreenName
   * @param screenName {string} The Edited Screen Name
   * @param Bio {string} The Edited Bio
   * @returns Request Response
   */
  updateProfile(screenName: string, Bio: string){
    const paramsSent = JSON.stringify({bio:Bio , screen_name:screenName}, null , '');
    const headers = {headers: new HttpHeaders({'Content-Type' : 'application/json'})};
    return this.http.patch(`${this.base}user/profile`, paramsSent, headers)
                          .pipe(catchError(this.handleError))
                          .subscribe(); 
  }

  /**
   * Put request To Edit The authorised user Banner
   * @param image_file {File} The Uploaded Image
   * @returns Request Response (Image Url);
   */
  updateBanner(image_file: File) {
    let body = new FormData();
    body.append('file', image_file, 'file');
    return this.http.post(this.base + 'user/profile_banner', body)
                        .pipe(catchError(this.handleError))
                        .subscribe(
                        (res) => console.log(res),
                        (err) => console.log(err)); 
                        
  }

  /**
   * Delete request To remove The authorised user Banner
   * No Parametes
   * @returns Request Response (Image Url);
   */
  removeBanner() {
    return this.http.delete<any>(this.base + 'user/profile_banner')
                            .pipe(catchError(this.handleError))
                             .subscribe(
                              (res) => console.log(res),
                              (err) => console.log(err)); 
                            
  }

  /**
   * Put request To Edit The authorised user Banner
   * @param image_file {File} The Uploaded Image
   * @returns Request Response (Image Url);
   */
  updateProfilePicture(image_file: File): Observable<string> {
    const body = new FormData();
    body.append('file', image_file, 'file');
    return this.http.put<string>(this.base + 'user/profile_picture', body)
                          .pipe(
                           map(res => res),
                           catchError(this.handleError)
                           );
  }

  /**
   * Delete request To remove The authorised user Profile Picture
   * No Parametes
   * @returns Request Response (Image Url);
   */
  removeProfilePicture() {
    return this.http.delete<any>(this.base + 'user/profile_picture')
              .pipe(catchError(this.handleError))
              .subscribe(
                (res) => console.log(res),
                (err) => console.log(err));   
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
 * signUpUSer
 */
public signUpUser(user: any): Observable <any> {
  const body = JSON.stringify(user);
  console.log(body);
  const headers = {headers: new HttpHeaders({'Content-Type' : 'application/json'})};
  return this.http.post<any>(this.base + 'account/registration', body, headers)
                              .pipe(
                              map(res => res),
                              catchError(this.handleError)
                              );
}

/**
 * sendEmail
 */
public sendEmail(user: any): Observable <any> {
  const body = JSON.stringify(user);
  console.log(body);
  const headers = {headers: new HttpHeaders({'Content-Type' : 'application/json'})};
  return this.http.post<any>(this.base + 'account/forget_password', body, headers)
                              .pipe(
                              map(res => res),
                              catchError(this.handleError)
                              );

}
/**
 * signUpConfirm
 */
public signUpConfirm(code: any): Observable <any> {
  const body = JSON.stringify(code);
  console.log(body);
  const headers = {headers: new HttpHeaders({'Content-Type' : 'application/json'})};
  
  //else, confirming email
  return this.http.post<any>(this.base + 'account/registration/confirmation', body, headers)
                              .pipe(
                              map(res => res),
                              catchError(this.handleError)
                              );


}
/**
 * post request To add a new kweek
 * @param text {string} the kweek data
 * @returns Request Response
 */
  addNewKweek(text: string): Observable <any> {

    const obj = { text: String(), reply_to: String()  };
    obj.text = text;
    obj.reply_to = null;


    return this.http.post<any>(this.base + 'kweeks/', obj)
                                .pipe(
                                  map(res => res),
                                  catchError(this.handleError)
                                );
  }

  
/**
 * sendPass
 */
public sendPass(pass: any): Observable <any> {
  const body = JSON.stringify(pass);
  console.log(body);
  const headers = {headers: new HttpHeaders({'Content-Type' : 'application/json'})};
  return this.http.post<any>(this.base + 'user/password', body, headers)
                              .pipe(
                              map(res => res),
                              catchError(this.handleError)
                              );  
 
}











}
