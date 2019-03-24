import { Component, OnInit, Input } from '@angular/core';
import { MiniUser } from '../../model/mini-user';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

/**
 * MiniProfile Component is used For all Mini profile cards
 * in The Profile page for Followers or Followings
 */
@Component({
  selector: 'app-mini-profile',
  templateUrl: './mini-profile.component.html',
  styleUrls: ['./mini-profile.component.css']
})

export class MiniProfileComponent implements OnInit {

  /* Array of MiniUsers To get some of the following and followers Info */
           /* Initialised with Dummy Data To Show Template */
  public miniCardProfileUsers: MiniUser[] =
  [
    {
      username: '',
      screen_name: '',
      profile_image_url: '',
      following: false,
      follows_you: false,
      blocked: false,
      muted: false,
    },
    {
      username: '',
      screen_name: '',
      profile_image_url: '',
      following: false,
      follows_you: false,
      blocked: false,
      muted: false,
    },
    {
      username: '',
      screen_name: '',
      profile_image_url: '',
      following: false,
      follows_you: false,
      blocked: false,
      muted: false,
    },
    {
      username: '',
      screen_name: '',
      profile_image_url: '',
      following: false,
      follows_you: false,
      blocked: false,
      muted: false,
    },
    {
      username: '',
      screen_name: '',
      profile_image_url: '',
      following: false,
      follows_you: false,
      blocked: false,
      muted: false,
    },
    {
      username: '',
      screen_name: '',
      profile_image_url: '',
      following: false,
      follows_you: false,
      blocked: false,
      muted: false,
    },
    {
      username: '',
      screen_name: '',
      profile_image_url: '',
      following: false,
      follows_you: false,
      blocked: false,
      muted: false,
    },
    {
      username: '',
      screen_name: '',
      profile_image_url: '',
      following: false,
      follows_you: false,
      blocked: false,
      muted: false,
    },
    {
      username: '',
      screen_name: '',
      profile_image_url: '',
      following: false,
      follows_you: false,
      blocked: false,
      muted: false,
    },
    {
      username: '',
      screen_name: '',
      profile_image_url: '',
      following: false,
      follows_you: false,
      blocked: false,
      muted: false,
    },
    {
      username: '',
      screen_name: '',
      profile_image_url: '',
      following: false,
      follows_you: false,
      blocked: false,
      muted: false,
    },
    {
      username: '',
      screen_name: '',
      profile_image_url: '',
      following: false,
      follows_you: false,
      blocked: false,
      muted: false,
    },
    {
      username: '',
      screen_name: '',
      profile_image_url: '',
      following: false,
      follows_you: false,
      blocked: false,
      muted: false,
    },
    {
      username: '',
      screen_name: '',
      profile_image_url: '',
      following: false,
      follows_you: false,
      blocked: false,
      muted: false,
    }
  ];
   
          /* route children name which based on it, 
  The right request will be sent  [Followers OR Followings] */
  public routeChildName: string;

   /**
   *
   * @param route to Know which Url is Activated To send The appropiate request
   * @param miniProfileInfoService DataService Parameter To Send Request getting
   * all followers or following information
   */
  constructor(private miniProfileInfoService: DataService,
               private route: ActivatedRoute) { }

               
  //This part will be updated
  FollowersOrFollowings(): void
  {
    if (this.route.snapshot.firstChild != null)
    {
      this.routeChildName = this.route.snapshot.firstChild.toString();
    }
  }

   /**
   * ngOnInit is used to start the process of knowing which Url is Activated
   * and Based On It, Send the appropiate request
   */
  ngOnInit() {

     //This part will be updated
    this.FollowersOrFollowings();
    if(this.routeChildName == 'followers')
    {
      this.miniProfileInfoService.getUserFollowers().subscribe
      ( usersInfo => {this.miniCardProfileUsers = usersInfo; } )
    }
    else if (this.routeChildName == 'following')
    {
      this.miniProfileInfoService.getUserFollowings().subscribe
      ( usersInfo => {this.miniCardProfileUsers = usersInfo; } )
    }
  }

}
