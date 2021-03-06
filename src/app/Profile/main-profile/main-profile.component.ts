import { Component, OnInit, Inject } from "@angular/core";
import { User } from "../../model/user";
import { DataService } from "src/app/services/data.service";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { delay } from "q";
import { MatDialog } from "@angular/material";
import { EditImagesComponent } from "../edit-images/edit-images.component";
import { NewKweekComponent } from '../../new-kweek/new-kweek.component';
import { ChatComponent } from '../../chat/chat.component';
import { ChatService } from 'src/app/chat/chat.service';
import { TitleService } from 'src/app/services/title.service';



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

  /** The Authorized User (The one who made Log in) */
  authorizedUser: string = localStorage.getItem("username");

  /* Some Modes that helping control UI */

  /** EditingMode is the Mode That The user can change 
   * Its Screen Name, Bio, Profile Image And Banner Image
   */
  isEditingMode: boolean = false;

  /** MuteMode is the Mode That Indicate if The Authorised User Mute
   * The Profile User Or Not which based On it Mute Icon will Appear
   */
  muteMode: boolean = false;

   /** SemiBlockMode is the Mode That Indicate if The Authorised User Block
   * The Profile User But it can See his Information
   */
  semiBlockedMode: boolean = false;

  /* User Edited Data */

  /** The Edited Screen Name in Editing Mode */
  editedScreenName: string ;

  /** The Edited Bio in Editing Mode */
  editedBio: string ;

  /** Is The Profile User Blocked The Authorised User */
  AuthorisedIsBlocked:boolean = false;

  /** Default Profile Picture */
  defaultProfilePicture: string = "http://kwikkerbackend.eu-central-1.elasticbeanstalk.com/user/upload/picture/profile.jpg";
   /** Default Profile Banner */
  defaultProfileBanner: string = "http://kwikkerbackend.eu-central-1.elasticbeanstalk.com/user/upload/banner/banner.jpg";

   /**
   * Open Resize, Scale and Crop Profile Image,
   */
  openEditImagesDialog() {
    let dialogRef = this.dialog.open(EditImagesComponent, {
      data: this.profileUser.profile_image_url,
      panelClass: 'EditImageBox'
    });
    dialogRef.afterClosed().subscribe(image => {
      if(image != null )
      {
          /* Preview The Image */
          var reader = new FileReader();
          reader.readAsDataURL(image);
          reader.onload = _event => {
            this.profileUser.profile_image_url = reader.result.toString();
          };
          
          /* Send Change The Image Request */
          var S:string;
          this.profileInfoService.updateProfilePicture(image as File).subscribe 
          ( serInfo => { S = serInfo; }  );
    }
    });
  }

    /**
     * Open Write Kweek Component Dialog,
     */
    openKweekDialog()
    {
      const dialogRef = this.dialog.open(NewKweekComponent,
         { panelClass: 'kweekBox'});
         dialogRef.componentInstance.reply = true;
         dialogRef.componentInstance.kweekTO = true;
         dialogRef.componentInstance.username = this.profileUser.username;
         dialogRef.componentInstance.screenname = this.profileUser.screen_name;
    }

     /**
     * Open Profile Image When Clicked,
     */
    openProfileImage()
    {
     
        var modal = document.getElementById('myModal');
        var img = document.getElementById('ProfileImage');
        var modalImg = document.getElementById("img01") as HTMLImageElement;
        modal.style.display = "block";
        modalImg.src = this.profileUser.profile_image_url;
        var span = document.getElementsByClassName("close")[0];
    }

    /**
     * Close Profile Image Pop up,
     */
    closeProfileImage()
    {
      var modal = document.getElementById('myModal');
      modal.style.display = "none";
    }

     /**
     * Open Inbox Component Dialog,
     */
    openInboxDialog()
    {
      this.ChatService.setAddressee(this.profileUser);
      this.ChatService.setSection(3);
      const dialogRef = this.dialog.open(ChatComponent);
    }

  /**
   * Check If this Profile belongs to the authorized User (The one who loged in),
   * 
   * @returns {boolean}
   */
  isAuthorisedUser(): boolean {
    if(this.profileUser != null )
    {
       return (this.profileUser.username == this.authorizedUser);
    }
  }

  /**
   * Check If User has No profile Picture,
   * 
   * @returns {boolean}
   */
  isProfilePictureDefault(): boolean {
    return (this.profileUser.profile_image_url  == this.defaultProfilePicture);
  }

  /**
   * Check If User has No Banner,
   * 
   * @returns {boolean}
   */
  isProfileBannerDefault(): boolean {
    return (this.profileUser.profile_banner_url ==  this.defaultProfileBanner);
 
  }

  /**
   * Change User Profile Banner,
   * 
   * @param event Event from the browser with the selected new banner photo
   */
  changeProfileBanner(event) {
    /* Preview The Image */
    const file = event.target.files[0];
    var reader = new FileReader();
    var imagePath = event.target.files;
    reader.readAsDataURL(file);
    reader.onload = _event => {
      this.profileUser.profile_banner_url = reader.result.toString();
    };

    /* Send Change The Image Request */
      this.profileInfoService.updateBanner(file).subscribe(userInfo => {
      this.profileUser.profile_banner_url = userInfo;
    });
  }

  /**
   * Remove User Profile Photo,
   */
  removeProfilePicture(): void {
    this.profileUser.profile_image_url = this.defaultProfilePicture;
    this.ShowMessage("Profile image removed");
    this.profileInfoService.removeProfilePicture().subscribe();
  }

  /**
   * Remove User Profile Banner,
   */
  removeProfileBanner(): void {
    this.profileUser.profile_banner_url = this.defaultProfileBanner;
    this.ShowMessage("No more header for you");
    this.profileInfoService.removeBanner().subscribe(); 
  }

  /**
   * Change Between Editing Mode and Default Mode,
   */
  toggleEditingMode(): void {
    this.isEditingMode = !this.isEditingMode;
  }

  /**
   * Change Between Blocked Mode(User can't see Kweeks, Followers Or Followings)
   * and Semi-Blocked Mode (Still Blocked But Kweeks, Followers And Followings are available),
   */
  togglesemiBlockedMode(): void {
    this.semiBlockedMode = !this.semiBlockedMode;
  }

  /**
   * Change Between Follow And Unfollow Buttons, And Send their requests,
   */
  toggleFollow() {
    if (this.profileUser.following)
     {
      this.profileInfoService
        .unfollowUser(this.profileUser.username)
        .subscribe();
        this.profileUser.followers_count -= 1;
    } 
    else 
    {
      this.profileInfoService.followUser(this.profileUser.username).subscribe();
      this.profileUser.followers_count += 1;
    }
    this.profileUser.following = !this.profileUser.following;
 
  }

  /**
   * Change Between Mute And Unmute Buttons, And Send their requests,
   * It Also Activate muteMode (Mute Icon in the Navbar),
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
   * Change Between Block And UnBlock Buttons, And Send their requests,
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
      this.profileUser.follows_you = false;
    }
    this.profileUser.blocked = !this.profileUser.blocked;
    this.semiBlockedMode = false;
    
  }

  /**
   * Check The Edited Data are Valid and Send The request to change it,
   */
  updateProfile(): void {
    if (this.editedScreenName === "") {
      this.ShowMessage("Name can't be blank");
      return;
    }
    this.profileInfoService.updateProfile(this.editedScreenName, this.editedBio).subscribe();
    this.profileUser.screen_name = this.editedScreenName;
    this.profileUser.bio = this.editedBio;
    this.isEditingMode = false;
  }

  /**
   * Generate Delay
   * @param ms Delay Time in Milliseconds
   * 
   * @returns { Promise } Promise For The Delay 
   */
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Make the Notification bar visible with a message for some time
   * 
   * @param Msg {string} The Message that would appear in the notification bar
   * 
   */
  async ShowMessage(Msg: string) {
    document.querySelector(".Msg").textContent = Msg;
    var messageBox = document.getElementById("message-sticky");
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
   *  Main Profile Constructor 
   * 
   * @param route is used to Know which Parameter is sent To The Profile Url
   * and Based on It request Its Information
   * @param profileInfoService DataService Parameter To Send Request getting
   * all Information about the profile user
   * @param dialog  Dialog Service which is used to open Pop up windows
   * 
   * @param router Service used to Navigate To The Error Page
   *
   * @param ChatService Service used To Open Chat Inbox
   * 
   * @param title Service used To change The Profile Page Title
   * 
   */
  constructor(
    private profileInfoService: DataService,
    public route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private ChatService:ChatService,
    private title:TitleService
  ) {}

  /**
   * ngOnInit is used to start the process of knowing which Parameter is sent
   * To The Profile Url and Based On It, Send the request
   * Or Open The Error Page if The User doesn't Exist
   * Or If The Authorised Uer was Blocked Take Some Decisions
   */
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {

    //Get The Profile user from The Url To Request Its Info
    let profileUserName = this.route.snapshot.paramMap.get("username");
    ///Go To Error Page [Sorry, that page doesn’t exist!]
    this.profileInfoService.getProfileInfo(profileUserName).subscribe(
    userInfo => {
                this.profileUser = userInfo;
                if(this.title!=null)
                {
                   this.title.setTitleProfile(userInfo.screen_name,userInfo.username);
                }
                this.editedScreenName = this.profileUser.screen_name;
                this.editedBio = this.profileUser.bio;
             },
      err => {
                //If Theis Profile User Blocked The Authorised User
                if(err.status == "403")
                {
                  this.profileUser = err.error;
                  this.AuthorisedIsBlocked = true;
                }
                else
                {
                  this.router.navigateByUrl("/error");   
                }
            });
      });
   }
}


