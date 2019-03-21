import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { Trend } from '../../model/Trend';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrls: ['./main-profile.component.css']
})
export class MainProfileComponent implements OnInit {
 
  /* All Info for the profile user */
  profileUser: User =
  {
      username: '',
      screen_name: '',
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

  /* Array of Tredns */
  trends: Trend[];

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
 
  
  constructor(private profileInfoService: DataService) { }


  ngOnInit() {

    this.profileInfoService.getProfileInfo( this.profileUser.username).subscribe
    ( userInfo => {this.profileUser = userInfo; } )

    this.profileInfoService.getTrends().subscribe
    ( trendsInfo => {this.trends = trendsInfo; } )
  }

}
