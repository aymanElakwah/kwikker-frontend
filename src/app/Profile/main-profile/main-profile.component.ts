import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrls: ['./main-profile.component.css']
})
export class MainProfileComponent implements OnInit {
 
        /* All Info for the profile user */
/* Initialised With Dummy Data To test Template */
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
 
  constructor(private profileInfoService: DataService,
              private route: ActivatedRoute) { }


  ngOnInit() {
    
    //Get The Profile user from The Url To Request Its Info
    let profileUserName = this.route.snapshot.paramMap.get('username');
    this.profileInfoService.getProfileInfo(profileUserName).subscribe
    ( userInfo => {this.profileUser = userInfo; } )

  }

}
