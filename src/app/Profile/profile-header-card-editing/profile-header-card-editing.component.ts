import { Component, Input , OnInit,  EventEmitter, Output } from '@angular/core';
import { User } from '../../model/user';

                   /* Edit-Mode Header Card */
/* The User can edit its Screen Name, Date and Bio From this Component */
@Component({
  selector: 'app-profile-header-card-editing',
  templateUrl: './profile-header-card-editing.component.html',
  styleUrls: ['./profile-header-card-editing.component.css']
})
export class ProfileHeaderCardEditingComponent implements OnInit {

  /* All Info for the profile user: Input from MainProfileComponent */
  @Input() profileHeaderInfo:User;

  /*Is The Profile for The Authorized User (The one who made Log in): Input from MainProfileComponent */
  @Input() isAuthorisedUser: boolean;

  /* The Edited data that will be sent To The main Component */
                 /* The Edited Screen Name */
  @Output() editedScreenName: EventEmitter<string> = new EventEmitter<string>();
                    /* The Edited Bio */
  @Output() editedBio: EventEmitter<string> = new EventEmitter<string>();
                    /* The Edited Date */
  @Output() editedDate: EventEmitter<string> = new EventEmitter<string>();

 
  /**
   * Send the edited data to The Main Component
   * No Parameters  
   * No return 
   */
  changeProfileData()
  {
    this.editedScreenName.emit((document.getElementById("EditName") as HTMLInputElement).value);
    this.editedBio.emit((document.getElementById("EditBio") as HTMLInputElement).value);
  }

  /**
   * Empty Constructor => May be used later
   */
  constructor() { 
    
  }

  /**
   * Empty ngOnInit => May be used later
   */
  ngOnInit() {
    
  }

}
