import { Component, OnInit, Inject } from "@angular/core";
import { User } from "../../model/user";
import { DataService } from "src/app/services/data.service";
import { ActivatedRoute, Router } from "@angular/router";
import { delay } from "q";
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material";
import { EditImagesComponent } from "../edit-images/edit-images.component";
import * as $ from 'jquery/dist/jquery.min.js';


/**
 * The Main Component For The Profile Page
 * which Tags any other Components Included
 * In The Profile Page
 */
@Component({
  selector: "app-main-profile",
  templateUrl: "./main-profile.component.html",
  styleUrls: ["./main-profile.component.css"]
})
export class MainProfileComponent implements OnInit {
  /**
   * All Info for the profile user
   * */
  profileUser: User;

  /* The Authorized User (The one who made Log in) */
  authorizedUser: string = localStorage.getItem("username");

  /* Some Modes that helping control UI */
  isEditingMode: boolean = false;
  muteMode: boolean = false;
  semiBlockedMode: boolean = false;

  /* User Edited Data */
  editedScreenName: string ;
  editedBio: string ;

  /* Default Profile Picture and Banner */
  defaultProfilePicture: string = "http://kwikkerbackend.eu-central-1.elasticbeanstalk.com/user/upload/picture/profile.jpg";
  defaultProfileBanner: string = "http://kwikkerbackend.eu-central-1.elasticbeanstalk.com/user/upload/banner/banner.jpg";


   /**
   * Open Resize, Scale and Crop Profile Image
   * No Parameters
   * No return
   */
  openEditImagesDialog() {
    let dialogRef = this.dialog.open(EditImagesComponent, {
      data: this.profileUser.profile_image_url,
      height: "700px",
      width: "700px",
    });
    console.log(this.profileUser.profile_image_url);
    dialogRef.afterClosed().subscribe(image => {

      var reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = _event => {
        this.profileUser.profile_image_url = reader.result.toString();
      };
  
      var S:string;
      this.profileInfoService.updateProfilePicture(image as File).subscribe 
      ( serInfo => { S = serInfo; }  );
      /* this.profileUser.profile_image_url = S + "?dummy=" + Math.random(); */
      
  
    });
  }

  /**
   * Check If this Profile belongs to the authorized User (The one who loged in)
   * No Parameters
   * @returns {boolean}
   */
  isAuthorisedUser(): boolean {
    return (this.profileUser.username == this.authorizedUser);
  }

  /**
   * Check If User has No profile Picture
   * No Parameters
   * @returns {boolean}
   */
  isProfilePictureDefault(): boolean {
    return (this.profileUser.profile_image_url  == this.defaultProfilePicture);
  }

  /**
   * Check If User has No Banner
   * No Parameters
   * @returns {boolean}
   */
  isProfileBannerDefault(): boolean {
    return (this.profileUser.profile_banner_url ==  this.defaultProfileBanner);
  }

  /**
   * Change User Profile Banner
   * @param event Event from the browser with the selected new banner photo
   * No return
   */
  changeProfileBanner(event) {
    const file = event.target.files[0];
    var reader = new FileReader();
    var imagePath = event.target.files;
    reader.readAsDataURL(file);
    reader.onload = _event => {
      this.profileUser.profile_banner_url = reader.result.toString();
    };

    this.profileInfoService.updateBanner(file).subscribe(userInfo => {
      this.profileUser.profile_banner_url = userInfo;
      this.profileUser.profile_banner_url += "?dummy=" + Math.random();
    });
  }

  /**
   * Remove User Profile Photo
   * No Parameters
   * No return
   */
  removeProfilePicture(): void {
    this.profileUser.profile_image_url = this.defaultProfilePicture;
    this.ShowMessage("Profile image removed");
    this.profileInfoService.removeProfilePicture().subscribe();
    this.profileUser.profile_image_url = this.defaultProfilePicture;
  }

  /**
   * Remove User Profile Banner
   * No Parameters
   * No return
   */
  removeProfileBanner(): void {
    this.profileUser.profile_banner_url = null;
    this.ShowMessage("No more header for you");
    /* this.profileInfoService.removeBanner().subscribe(); */
    this.profileUser.profile_banner_url = this.defaultProfileBanner;
    console.log(this.defaultProfileBanner);
    console.log(this.profileUser.profile_banner_url);
  }

  /**
   * Change Between Editing Mode and Default Mode
   * No Parameters
   * No return
   */
  toggleEditingMode(): void {
    this.isEditingMode = !this.isEditingMode;
  }

  /**
   * Change Between Blocked Mode(User can't see Kweeks, Followers Or Followings)
   * and Semi-Blocked Mode (Still Blocked But Kweeks, Followers And Followings are available)
   * No Parameters
   * No return
   */
  togglesemiBlockedMode(): void {
    this.semiBlockedMode = !this.semiBlockedMode;
  }

  /**
   * Change Between Follow And Unfollow Buttons, And Send their requests
   * No Parameters
   * No return
   */
  toggleFollow() {
    if (this.profileUser.following) {
      this.profileInfoService
        .unfollowUser(this.profileUser.username)
        .subscribe();
    } else {
      this.profileInfoService.followUser(this.profileUser.username).subscribe();
    }
    this.profileUser.following = !this.profileUser.following;
 
  }

  /**
   * Change Between Mute And Unmute Buttons, And Send their requests
   * It Also Activate muteMode (Mute Icon in the Navbar)
   * No Parameters
   * No return
   */
  toggleMute(): void {
    if (this.profileUser.muted) {
      this.profileInfoService.unmuteUser(this.profileUser.username).subscribe();
      this.ShowMessage("Unmuted @" + this.profileUser.screen_name);
    } else {
      this.profileInfoService.muteUser(this.profileUser.username).subscribe();
      this.ShowMessage(
        "You will no longer receive notification from @" +
          this.profileUser.screen_name
      );
    }
    this.profileUser.muted = !this.profileUser.muted;
    this.muteMode = true;
  }

  /**
   * Change Between Block And UnBlock Buttons, And Send their requests
   * No Parameters
   * No return
   */
  toggleBlock(): void {
    if (this.profileUser.blocked) {
      this.profileInfoService
        .unblockUser(this.profileUser.username)
        .subscribe();
      this.ShowMessage(
        "@" +
          this.profileUser.screen_name +
          " will now be able to follow you and read your Kweeks"
      );
    } else {
      this.profileInfoService.blockUser(this.profileUser.username).subscribe();
      this.ShowMessage(
        "@" + this.profileUser.screen_name + " has been blocked"
      );
      this.profileUser.following = false;
    }
    this.profileUser.blocked = !this.profileUser.blocked;
    this.semiBlockedMode = false;
  }

  /**
   * Check The Edited Data are Valid and Send The request to change it
   * No Parameters
   * No return
   */
  updateProfile(): void {
    if (this.editedScreenName === "") {
      this.ShowMessage("Name can't be blank");
      return;
    }
    this.profileInfoService
      .updateProfile(this.editedScreenName, this.editedBio)
      .subscribe(res => console.log(res));
    this.profileUser.screen_name = this.editedScreenName;
    this.profileUser.bio = this.editedBio;
    this.isEditingMode = false;
    this.profileInfoService.searchKweeks("#trend").subscribe();
  }

  /**
   * Generate Delay
   * No Parameters
   * No return
   */
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Make the Notification bar visible with a message for some time
   * @param Msg {string} The Message that would appear in the notification bar
   * No return
   */
  async ShowMessage(Msg: string) {
    document.querySelector(".Msg").textContent = Msg;
    const messageBox = document.getElementById("message-sticky");
    messageBox.style.display = "block";
    messageBox.style.visibility = "visible";
    messageBox.style.transform = "translate( 0px,48px)";
    messageBox.style.borderTopWidth = "2px";
    messageBox.style.borderTopColor = "black";
    await delay(5000);
    messageBox.style.transform = "translate( 0px,-48px)";
    messageBox.style.visibility = "hidden";
  }

  /**
   *
   * @param route is used to Know which Parameter is sent To The Profile Url
   * and Based on It request Its Information
   * @param profileInfoService DataService Parameter To Send Request getting
   * all Information about the profile user
   * @param dialog  Dialog Service which is used to open Pop up windows
   * 
   * @param router Service used to Navigate To The Error Page
   *
   */
  constructor(
    private profileInfoService: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {}

  /**
   * ngOnInit is used to start the process of knowing which Parameter is sent
   * To The Profile Url and Based On It, Send the request
   */
  ngOnInit() {
    //Get The Profile user from The Url To Request Its Info
    let profileUserName = this.route.snapshot.paramMap.get("username");

    //To be Added: If The Username doesn't Exist [Not Signed Up]
    ///Go To Error Page [Sorry, that page doesn’t exist!]
    this.profileInfoService.getProfileInfo(profileUserName).subscribe(
      userInfo => {
        this.profileUser = userInfo;
        this.editedScreenName = this.profileUser.screen_name;
        this.editedBio = this.profileUser.bio;
        if(!this.isProfilePictureDefault())
        {
             this.profileUser.profile_image_url += "?dummy=" + Math.random();
        }

        if(!this.isProfileBannerDefault())
        {
            this.profileUser.profile_banner_url += "?dummy=" + Math.random();
        }
      },
      err => {
         this.router.navigateByUrl("/error");  
      }
    );
  }
}
