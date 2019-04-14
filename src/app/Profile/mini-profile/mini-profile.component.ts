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
  public miniCardProfileUsers: MiniUser[] =
  [
    {
      username: 'Ahmed Mahmoud',
      screen_name: 'Ahmed_Mahmoud14',
      profile_image_url: 'https://i.ibb.co/z2wkPKs/Default.png',
      following: true,
      follows_you: true,
      blocked: false,
      muted: false,
      bio: 'Play the best of EA for $4.99 a month! EA Access brings you great games for a great price with The Vault, an evolving collection of EA games for Xbox One!',
    },
    {
      username: 'Ahmed Mahmoud',
      screen_name: 'Ahmed_Mahmoud14',
      profile_image_url: 'https://i.ibb.co/X74ncSm/Premier-League.jpg',
      following: false,
      follows_you: false,
      blocked: false,
      muted: true,
      bio: 'Play the best of EA for $4.99 a month! EA Access brings you great games for a great price with The Vault, an evolving collection of EA games for Xbox One!',
    },
    {
      username: 'Ahmed Mahmoud',
      screen_name: 'Ahmed_Mahmoud14',
      profile_image_url: 'https://i.ibb.co/X74ncSm/Premier-League.jpg',
      following: false,
      follows_you: false,
      blocked: false,
      muted: false,
      bio: 'Play the best of EA for $4.99 a month! EA Access brings you great games for a great price with The Vault, an evolving collection of EA games for Xbox One!',
    },
    {
      username: 'Ahmed Mahmoud',
      screen_name: 'Ahmed_Mahmoud14',
      profile_image_url: 'https://i.ibb.co/X74ncSm/Premier-League.jpg',
      following: false,
      follows_you: false,
      blocked: false,
      muted: false,
      bio: 'Play the best of EA for $4.99 a month! EA Access brings you great games for a great price with The Vault, an evolving collection of EA games for Xbox One!',
    },
    {
      username: 'Ahmed Mahmoud',
      screen_name: 'Ahmed_Mahmoud14',
      profile_image_url: 'https://i.ibb.co/X74ncSm/Premier-League.jpg',
      following: false,
      follows_you: false,
      blocked: false,
      muted: false,
      bio: 'Play the best of EA for $4.99 a month! EA Access brings you great games for a great price with The Vault, an evolving collection of EA games for Xbox One!',
    },
    {
      username: 'Ahmed Mahmoud',
      screen_name: 'Ahmed_Mahmoud14',
      profile_image_url: 'https://i.ibb.co/X74ncSm/Premier-League.jpg',
      following: false,
      follows_you: false,
      blocked: false,
      muted: false,
      bio: 'Play the best of EA for $4.99 a month! EA Access brings you great games for a great price with The Vault, an evolving collection of EA games for Xbox One!',
    },
    {
      username: 'Ahmed Mahmoud',
      screen_name: 'Ahmed_Mahmoud14',
      profile_image_url: 'https://i.ibb.co/X74ncSm/Premier-League.jpg',
      following: false,
      follows_you: false,
      blocked: false,
      muted: false,
      bio: 'Play the best of EA for $4.99 a month! EA Access brings you great games for a great price with The Vault, an evolving collection of EA games for Xbox One!',
    },
    {
      username: 'Ahmed Mahmoud',
      screen_name: 'Ahmed_Mahmoud14',
      profile_image_url: 'https://i.ibb.co/X74ncSm/Premier-League.jpg',
      following: false,
      follows_you: false,
      blocked: false,
      muted: false,
      bio: 'Play the best of EA for $4.99 a month! EA Access brings you great games for a great price with The Vault, an evolving collection of EA games for Xbox One!',
    },
    {
      username: 'Ahmed Mahmoud',
      screen_name: 'Ahmed_Mahmoud14',
      profile_image_url: 'https://i.ibb.co/X74ncSm/Premier-League.jpg',
      following: false,
      follows_you: false,
      blocked: false,
      muted: false,
      bio: 'Play the best of EA for $4.99 a month! EA Access brings you great games for a great price with The Vault, an evolving collection of EA games for Xbox One!',
    },
    {
      username: 'Ahmed Mahmoud',
      screen_name: 'Ahmed_Mahmoud14',
      profile_image_url: 'https://i.ibb.co/X74ncSm/Premier-League.jpg',
      following: false,
      follows_you: false,
      blocked: false,
      muted: false,
      bio: 'Play the best of EA for $4.99 a month! EA Access brings you great games for a great price with The Vault, an evolving collection of EA games for Xbox One!',
    },
    {
      username: 'Ahmed Mahmoud',
      screen_name: 'Ahmed_Mahmoud14',
      profile_image_url: 'https://i.ibb.co/X74ncSm/Premier-League.jpg',
      following: false,
      follows_you: false,
      blocked: false,
      muted: false,
      bio: 'Play the best of EA for $4.99 a month! EA Access brings you great games for a great price with The Vault, an evolving collection of EA games for Xbox One!',
    },
    {
      username: 'Ahmed Mahmoud',
      screen_name: 'Ahmed_Mahmoud14',
      profile_image_url: 'https://i.ibb.co/X74ncSm/Premier-League.jpg',
      following: false,
      follows_you: false,
      blocked: false,
      muted: false,
      bio: 'Play the best of EA for $4.99 a month! EA Access brings you great games for a great price with The Vault, an evolving collection of EA games for Xbox One!',
    },
    {
      username: 'Ahmed Mahmoud',
      screen_name: 'Ahmed_Mahmoud14',
      profile_image_url: 'https://i.ibb.co/X74ncSm/Premier-League.jpg',
      following: false,
      follows_you: false,
      blocked: false,
      muted: false,
      bio: 'Play the best of EA for $4.99 a month! EA Access brings you great games for a great price with The Vault, an evolving collection of EA games for Xbox One!',
    },
    {
      username: 'Ahmed Mahmoud',
      screen_name: 'Ahmed_Mahmoud14',
      profile_image_url: 'https://i.ibb.co/X74ncSm/Premier-League.jpg',
      following: false,
      follows_you: false,
      blocked: false,
      muted: false,
      bio: 'Play the best of EA for $4.99 a month! EA Access brings you great games for a great price with The Vault, an evolving collection of EA games for Xbox One!',
    },
    {
      username: 'Ahmed Mahmoud',
      screen_name: 'Ahmed_Mahmoud14',
      profile_image_url: 'https://i.ibb.co/X74ncSm/Premier-League.jpg',
      following: false,
      follows_you: false,
      blocked: false,
      muted: false,
      bio: 'Play the best of EA for $4.99 a month! EA Access brings you great games for a great price with The Vault, an evolving collection of EA games for Xbox One!',
    },
    {
      username: 'Ahmed Mahmoud',
      screen_name: 'Ahmed_Mahmoud14',
      profile_image_url: 'https://i.ibb.co/X74ncSm/Premier-League.jpg',
      following: false,
      follows_you: false,
      blocked: false,
      muted: false,
      bio: 'Play the best of EA for $4.99 a month! EA Access brings you great games for a great price with The Vault, an evolving collection of EA games for Xbox One!',
    },
    {
      username: 'Ahmed Mahmoud',
      screen_name: 'Ahmed_Mahmoud14',
      profile_image_url: 'https://i.ibb.co/X74ncSm/Premier-League.jpg',
      following: false,
      follows_you: false,
      blocked: false,
      muted: false,
      bio: 'Play the best of EA for $4.99 a month! EA Access brings you great games for a great price with The Vault, an evolving collection of EA games for Xbox One!',
    },
    {
      username: 'Ahmed Mahmoud',
      screen_name: 'Ahmed_Mahmoud14',
      profile_image_url: 'https://i.ibb.co/X74ncSm/Premier-League.jpg',
      following: false,
      follows_you: false,
      blocked: false,
      muted: false,
      bio: 'Play the best of EA for $4.99 a month! EA Access brings you great games for a great price with The Vault, an evolving collection of EA games for Xbox One!',
    }
  ];

   /* Array of MuteModes for each MiniUsers */
  public muteModes: boolean[] =
  [
    false,false,false,false,false,false,false,false,false,false,false,false,false,false 
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

  /**
   * Change Between Follow And Unfollow Buttons, And Send their requests
   * It Also Activate muteMode (Mute Icon in the Navbar)
   * @param index The Number of MiniUser in The Array to Send The Appropiate request  
   * No return 
   */             
  toggleFollow(index: number)
  {
    if( this.miniCardProfileUsers[index].following )
    {
      this.miniProfileInfoService.unfollowUser(this.miniCardProfileUsers[index].username);
    }
    else
    {
      this.miniProfileInfoService.followUser(this.miniCardProfileUsers[index].username);
    }
    this.miniCardProfileUsers[index].following = !this.miniCardProfileUsers[index].following;
  }

  /**
   * Change Between Mute And Unmute Buttons, And Send their requests
   * It Also Activate muteMode (Mute Icon in the Navbar)
   * @param index The Number of MiniUser in The Array to Send The Appropiate request  
   * No return 
   */
  toggleMute(index: number): void
  {
    if( this.miniCardProfileUsers[index].muted )
    {
      this.miniProfileInfoService.unmuteUser(this.miniCardProfileUsers[index].username);
    }
    else
    {
      this.miniProfileInfoService.muteUser(this.miniCardProfileUsers[index].username);
    }

    this.miniCardProfileUsers[index].muted = !this.miniCardProfileUsers[index].muted;
    this.muteModes[index] = true;
  }

   
  /**
   * Change Between Block And UnBlock Buttons, And Send their requests
   * It Also Activate muteMode (Mute Icon in the Navbar)
   * @param index The Number of MiniUser in The Array to Send The Appropiate request  
   * No return 
   */
  toggleBlock(index: number): void
  {
    if( this.miniCardProfileUsers[index].blocked )
    {
      this.miniProfileInfoService.unblockUser(this.miniCardProfileUsers[index].username);
    }
    else
    {
      this.miniProfileInfoService.blockUser(this.miniCardProfileUsers[index].username);
    }

    this.miniCardProfileUsers[index].blocked = ! this.miniCardProfileUsers[index].blocked 
  }
             
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
