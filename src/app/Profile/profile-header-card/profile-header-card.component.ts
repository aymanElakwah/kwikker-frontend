import { Component, Input , OnInit } from '@angular/core';
import { User } from '../../model/user';
import { NewKweekComponent } from '../../new-kweek/new-kweek.component';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { ChatComponent } from 'src/app/chat/chat.component';

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

  @Input() semiBlockedMode: boolean;

  openKweekDialog()
  {
    const dialogRef = this.dialog.open(NewKweekComponent,
       { panelClass: 'kweekBox'});
  }

  openInboxDialog()
  {
    const dialogRef = this.dialog.open(ChatComponent);
  }
 
  /**
   * Empty Constructor => May be used later
   */
  constructor(private dialog: MatDialog) { }

  /**
   * Empty ngOnInit => May be used later
   */
  ngOnInit() {}

}
