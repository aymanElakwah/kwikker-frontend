import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'q';
import * as $ from "jquery";


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
      username: 'Ahmed_Mahmoud14',
      screen_name: 'Ahmed Mahmoud',
      bio: 'Play the best of EA for $4.99 a month! EA Access brings you great games for a great price with The Vault, an evolving collection of EA games for Xbox One!',
      birth_date: new Date,
      created_at: new Date,
      profile_image_url: 'https://i.ibb.co/z2wkPKs/Default.png',
      profile_banner_url: null,
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
  authorizedUser: string = localStorage.getItem('username');

  /* Some Modes that helping control UI */
  isEditingMode: boolean = false;
  muteMode: boolean = false;
  semiBlockedMode: boolean = false;

   /* User Edited Data */
  editedScreenName: string = this.profileUser.username;
  editedBio: string = this.profileUser.bio;

   /* Default Profile Picture */
  defaultProfilePicture: string ='https://i.ibb.co/z2wkPKs/Default.png';

 
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
   * Check If User has No profile Picture 
   * No Parameters
   * @returns {boolean} 
   */
  isProfilePictureDefault(): boolean
  {
    return true;
    /* return (this.profileUser.profile_image_url  == this.defaultProfilePicture); */
  }

  /**
   * Check If User has No Banner 
   * No Parameters
   * @returns {boolean} 
   */
  isProfileBannerDefault(): boolean 
  {
    return (this.profileUser.profile_banner_url  == null);
  }


   /**
   * Change User Profile Picture
   * @param event Event from the browser with the selected new profile photo 
   * No return 
   */
  changeProfilePicture(event)
  {
    const file = event.target.files[0];
    this.profileInfoService.updateProfilePicture(file);
  }

   /**
   * Change User Profile Banner
   * @param event Event from the browser with the selected new banner photo 
   * No return 
   */
  changeProfileBanner(event)
  {
    const file = event.target.files[0];
    console.log(file);
    this.profileInfoService.updateBanner(file);
  }

  
   /**
   * Remove User Profile Photo
   * No Parameters  
   * No return 
   */
  removeProfilePicture(): void
  {
       this.profileUser.profile_image_url =   this.defaultProfilePicture;
       this.ShowMessage("Profile image removed");
       this.profileInfoService.removeProfilePicture();
  }

   /**
   * Remove User Profile Banner
   * No Parameters  
   * No return 
   */
  removeProfileBanner(): void
  {
       this.profileUser.profile_banner_url = null;
       this.ShowMessage("No more header for you");
       this.profileInfoService.removeBanner();
  }
  
  /**
   * Change Between Editing Mode and Default Mode
   * No Parameters  
   * No return 
   */
  toggleEditingMode(): void
  {
    this.isEditingMode = !this.isEditingMode;
  }

  /**
   * Change Between Blocked Mode(User can't see Kweeks, Followers Or Followings)
   * and Semi-Blocked Mode (Still Blocked But Kweeks, Followers And Followings are available)
   * No Parameters  
   * No return 
   */
  togglesemiBlockedMode(): void
  {
    this.semiBlockedMode = !this.semiBlockedMode;
  }

  /**
   * Change Between Follow And Unfollow Buttons, And Send their requests
   * No Parameters  
   * No return 
   */
  toggleFollow()
  {
    if( this.profileUser.following )
    {
      this.profileInfoService.unfollowUser(this.profileUser.username);
    }
    else
    {
      this.profileInfoService.followUser(this.profileUser.username);
    }
    this.profileUser.following = !this.profileUser.following;
  }

  /**
   * Change Between Mute And Unmute Buttons, And Send their requests
   * It Also Activate muteMode (Mute Icon in the Navbar)
   * No Parameters  
   * No return 
   */
  toggleMute(): void
  {
      if(this.profileUser.muted)
      {
          this.profileInfoService.unmuteUser(this.profileUser.username);
          this.ShowMessage("Unmuted @" + this.profileUser.screen_name);
      }
      else
      {
        this.profileInfoService.muteUser(this.profileUser.username);
        this.ShowMessage("You will no longer receive notification from @" + this.profileUser.screen_name);
        
      }
      this.profileUser.muted = !this.profileUser.muted;
      this.muteMode = true;
  }

  
  /**
   * Change Between Block And UnBlock Buttons, And Send their requests
   * No Parameters  
   * No return 
   */
  toggleBlock(): void
  {
      if(this.profileUser.blocked)
      {
        this.profileInfoService.unblockUser(this.profileUser.username);
        this.ShowMessage("@" + this.profileUser.screen_name + " will now be able to follow you and read your Kweeks");
      }
      else
      {
        this.profileInfoService.blockUser(this.profileUser.username);
        this.ShowMessage("@" + this.profileUser.screen_name + " has been blocked");
        this.profileUser.following = false;
        this.profileInfoService.unfollowUser(this.profileUser.username);
      }
      this.profileUser.blocked = !this.profileUser.blocked;
      this.semiBlockedMode = false; 
  }

  /**
   * Check The Edited Data are Valid and Send The request to change it
   * No Parameters  
   * No return 
   */
  updateProfile(): void
  {
    if(this.editedScreenName === "")
    {
      this.ShowMessage("Name can't be blank");
      return;
    }
    this.profileInfoService.updateProfile(this.editedScreenName, this.editedBio);
    this.profileUser.screen_name = this.editedScreenName;
    this.profileUser.bio = this.editedBio;
    this.isEditingMode = false;
  }


  
  /**
   * Generate Delay
   * No Parameters  
   * No return 
   */
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

    
  /**
   * Make the Notification bar visible with a message for some time
   * @param Msg {string} The Message that would appear in the notification bar  
   * No return 
   */
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
