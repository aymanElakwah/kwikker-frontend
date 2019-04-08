import { Component, Input , OnInit,  EventEmitter, Output } from '@angular/core';
import { User } from '../../model/user';



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

  @Output() editedUsername: EventEmitter<string> = new EventEmitter<string>();
  @Output() editedBio: EventEmitter<string> = new EventEmitter<string>();
  @Output() editedDate: EventEmitter<string> = new EventEmitter<string>();

  changeProfileData()
  {
    this.editedUsername.emit((document.getElementById("EditName") as HTMLInputElement).value);
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
