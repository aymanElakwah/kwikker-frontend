import { Component, Input , OnInit } from '@angular/core';
import { User } from '../../model/user';
import { NewKweekComponent } from '../../new-kweek/new-kweek.component';
import { MatDialog } from '@angular/material';
import { ChatComponent } from '../../chat/chat.component';
import { ChatService } from 'src/app/chat/chat.service';



/**
 * This component takes User Info from main one and show it 
 */
@Component({
  selector: 'app-profile-header-card',
  templateUrl: './profile-header-card.component.html',
  styleUrls: ['./profile-header-card.component.css']
})


export class ProfileHeaderCardComponent implements OnInit {
 
  /* All Info for the profile user: Input from MainProfileComponent */
  @Input() profileHeaderInfo:User;

  /*Is The Profile for The Authorized User (The one who made Log in): Input from MainProfileComponent */
  @Input() isAuthorisedUser: boolean;

  /* if The user in Semi Block Mode, Some Information Must be Hidden */
  @Input() semiBlockedMode: boolean;

  /* if The user in Semi Block Mode, Some Information Must be Hidden */
   @Input() AuthorisedIsBlocked: boolean;
   
  /**
     * Open Write Kweek Component Dialog
     * No Parameters
     * No return
     */
  openKweekDialog()
  {
    const dialogRef = this.dialog.open(NewKweekComponent,
       { panelClass: 'kweekBox'});
       dialogRef.componentInstance.reply = true;
       dialogRef.componentInstance.kweekTO = true;
       dialogRef.componentInstance.username = this.profileHeaderInfo.username;
       dialogRef.componentInstance.screenname = this.profileHeaderInfo.screen_name;
  }

   /**
     * Open Inbox Component Dialog
     * No Parameters
     * No return
     */
  openInboxDialog()
  {
    this.ChatService.setAddressee(this.profileHeaderInfo);
    this.ChatService.setSection(3);
    const dialogRef = this.dialog.open(ChatComponent);
  }
 
  /**
   * Empty Constructor 
   * @param dialog Dialog Service which is used to open Pop up windows
   * @param ChatService to send DM
   */
  constructor(private dialog: MatDialog,
              private ChatService:ChatService) { }

  /**
   * Empty ngOnInit 
   */
  ngOnInit() {}

}
