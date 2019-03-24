import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * The Main Component For The Profile Page
 * which Tags any other Components Included
 * In The Profile Page
 */
@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrls: ['./main-profile.component.css']
})


export class MainProfileComponent implements OnInit {
 
        /**
         * All Info for the profile user 
         * Initialised With Dummy Data To test Template 
         * */
  profileUser: User =
  {
      username: 'ahmed',
      screen_name: 'ahmed',
      bio: '',
      birth_date: new Date,
      created_at: new Date,
      profile_image_url: '',
      profile_banner_url: '',
      following: true,
      follows_you: false,
      followers_count: 0,
      following_count: 0,
      kweeks_count: 0,
      likes_count: 0,
      blocked: false,
      muted: false
  };

  /* The Authorized User (The one who made Log in) */
  authorizedUser: string = localStorage.getItem('username');

  /**
   * Check If this Profile belongs to the authorized User (The one who loged in) 
   * No Parameters
   * @returns {boolean} 
   */
  isAuthorisedUser(): boolean
  {
    return (this.profileUser.username == this.authorizedUser);
  }
 
   /**
   *
   * @param route is used to Know which Parameter is sent To The Profile Url 
   * and Based on It request Its Information
   * @param profileInfoService DataService Parameter To Send Request getting
   * all Information about the profile user
   * 
   */
  constructor(private profileInfoService: DataService,
              private route: ActivatedRoute) { }


  /**
   * ngOnInit is used to start the process of knowing which Parameter is sent 
   * To The Profile Url and Based On It, Send the request
   */
  ngOnInit() {
    
    //Get The Profile user from The Url To Request Its Info
    let profileUserName = this.route.snapshot.paramMap.get('username');
    
    //To be Added: If The Username doesn't Exist [Not Signed Up]
    ///Go To Error Page [Sorry, that page doesn’t exist!]
    this.profileInfoService.getProfileInfo(profileUserName).subscribe
    ( userInfo => {this.profileUser = userInfo; } )


  }

}
