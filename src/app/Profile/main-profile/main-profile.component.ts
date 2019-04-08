import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'q';

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
      username: 'Ahmed Mahmoud',
      screen_name: 'Ahmed_Mahmoud14',
      bio: 'Play the best of EA for $4.99 a month! EA Access brings you great games for a great price with The Vault, an evolving collection of EA games for Xbox One!',
      birth_date: new Date,
      created_at: new Date,
      profile_image_url: '',
      profile_banner_url: '',
      following: false,
      follows_you: false,
      followers_count: 0,
      following_count: 0,
      kweeks_count: 0,
      likes_count: 0,
      blocked: false,
      muted: false
  };

  /* The Authorized User (The one who made Log in) */
  authorizedUser: string = localStorage.getItem('screen-name');
  isEditingMode: boolean = false;
  muteMode: boolean = false;
  semiBlockedMode: boolean = false;
  editedUsername: string = this.profileUser.username;
  editedBio: string = this.profileUser.bio;


  /**
   * Check If this Profile belongs to the authorized User (The one who loged in) 
   * No Parameters
   * @returns {boolean} 
   */
  isAuthorisedUser(): boolean
  {
    return (this.profileUser.screen_name == this.authorizedUser);
  }

  activateEditingMode(): void
  {
    this.isEditingMode = true;
  }

  activatesemiBlockedMode(): void
  {
    this.semiBlockedMode = true;
  }

  deactivateEditingMode(): void
  {
    this.isEditingMode = false;
  }

  toggleFollow()
  {
    this.profileUser.following = !this.profileUser.following;
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  async ShowMessage(Msg: string)
  {
    document.querySelector('.Msg').textContent = Msg;
    const messageBox = document.getElementById('message-sticky');
    messageBox.style.display = "block";
    messageBox.style.visibility = "visible";
    messageBox.style.transform ="translate( 0px,40px)";
    await delay(5000);
    messageBox.style.transform ="translate( 0px,-40px)";
    messageBox.style.visibility = "hidden";
  }


  toggleMute(): void
  {
      this.profileUser.muted = !this.profileUser.muted;
      this.muteMode = true;
      if(!this.profileUser.muted)
      {
          this.ShowMessage("Unmuted @" + this.profileUser.screen_name);
      }
      else
      {
         this.ShowMessage("You will no longer receive notification from @" + this.profileUser.screen_name);
      }
  }

  toggleBlock(): void
  {
      this.profileUser.blocked = !this.profileUser.blocked;
      this.semiBlockedMode = false;
      if(this.profileUser.blocked)
      {
         this.ShowMessage("@" + this.profileUser.screen_name + " has been blocked");
      }
      else
      {
         this.ShowMessage("@" + this.profileUser.screen_name + " will now be able to follow you and read your Kweeks");
      }
  }

  updateProfile()
  {
    if(this.editedUsername === "")
    {
      this.ShowMessage("Name can't be blank");
      return;
    }

    this.profileUser.username = this.editedUsername;
    this.profileUser.bio = this.editedBio;
    this.isEditingMode = false;
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
