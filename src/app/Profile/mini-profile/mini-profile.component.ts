import { Component, OnInit, Input } from '@angular/core';
import { MiniUser } from '../../model/mini-user';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-mini-profile',
  templateUrl: './mini-profile.component.html',
  styleUrls: ['./mini-profile.component.css']
})
export class MiniProfileComponent implements OnInit {

  /* All Info for the profile user */
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
    }
  ];
   

  /* route children name which based on it, The right request will be sent */
  public routeChildName: string;

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
