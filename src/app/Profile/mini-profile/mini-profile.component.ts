import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../model/user';
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
  public miniCardProfileUsers: User[] = [];

   /* Array of MuteModes for each MiniUsers */
  public muteModes: boolean[] = [];
  
          /* route children name which based on it, 
  The right request will be sent  [Followers OR Followings] */
  public routeChildName: string;

  /* The Authorized User (The one who made Log in) */
  authorizedUser: string = localStorage.getItem("username");

  /* Last UserName Sent To The Backend To retireve more */
  LastSent: string = null;

  /* Profile Username */
  ProfileUserName: string;

  DummyString: string = "?dummy=" + Math.random();

      /**
   * Check If this Profile belongs to the authorized User (The one who loged in)
   * No Parameters
   * @returns {boolean}
   */
  isAuthorisedUser(index: number): boolean {
    return (this.miniCardProfileUsers[index].username == this.authorizedUser);
  }

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
      this.miniProfileInfoService.unfollowUser(this.miniCardProfileUsers[index].username).subscribe();
    }
    else
    {
      this.miniProfileInfoService.followUser(this.miniCardProfileUsers[index].username).subscribe();
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
      this.miniProfileInfoService.unmuteUser(this.miniCardProfileUsers[index].username).subscribe();
    }
    else
    {
      this.miniProfileInfoService.muteUser(this.miniCardProfileUsers[index].username).subscribe();
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
      this.miniProfileInfoService.unblockUser(this.miniCardProfileUsers[index].username).subscribe();
    }
    else
    {
      this.miniProfileInfoService.blockUser(this.miniCardProfileUsers[index].username).subscribe();
    }

    this.miniCardProfileUsers[index].blocked = ! this.miniCardProfileUsers[index].blocked 
  }
             
/**
   * Scroll Event Which is used to get more data for the followers and the followings
   * while the user scrolling 
   */
  onScroll() {
  
   if(this.miniCardProfileUsers.length != 0)
   {
      var LastUsername = this.miniCardProfileUsers[this.miniCardProfileUsers.length - 1].username ;
      var Lastindex = this.miniCardProfileUsers.length;
      if(this.route.snapshot.url[0].path == 'followers' && this.LastSent != LastUsername )
      {
       
        this.miniProfileInfoService.getUserFollowers(this.route.snapshot.root.children[0].params['username'], LastUsername).subscribe
        ( usersInfo => { this.miniCardProfileUsers = this.miniCardProfileUsers.concat(usersInfo); } )
        this.LastSent = LastUsername;
      }
      else if (this.route.snapshot.url[0].path == 'following' && this.LastSent != LastUsername)
      {
        this.miniProfileInfoService.getUserFollowings(this.route.snapshot.root.children[0].params['username'], LastUsername).subscribe
        ( usersInfo => { this.miniCardProfileUsers = this.miniCardProfileUsers.concat(usersInfo); } )
        this.LastSent = LastUsername;
      }
  }
}

   /**
   * ngOnInit is used to start the process of knowing which Url is Activated
   * and Based On It, Send the appropiate request
   */
  ngOnInit() {

    this.ProfileUserName = this.route.snapshot.root.children[0].params['username'];
    if(this.route.snapshot.url[0].path == 'followers')
    {
      this.miniProfileInfoService.getUserFollowers(this.ProfileUserName, null).subscribe
      ( usersInfo => { this.miniCardProfileUsers = usersInfo; } )
    }
    else if (this.route.snapshot.url[0].path == 'following')
    {
      this.miniProfileInfoService.getUserFollowings(this.ProfileUserName, null).subscribe
      ( usersInfo => { this.miniCardProfileUsers = usersInfo; } )
    }
    else 
    {
      this.miniProfileInfoService.searchUsers(this.route.snapshot.queryParams["filterBy"]).subscribe(
        usersInfo => { this.miniCardProfileUsers = usersInfo;});
    
    }
  }

}
