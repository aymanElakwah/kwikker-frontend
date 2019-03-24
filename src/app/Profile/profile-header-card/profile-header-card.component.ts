import { Component, Input , OnInit } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'app-profile-header-card',
  templateUrl: './profile-header-card.component.html',
  styleUrls: ['./profile-header-card.component.css']
})

/** 
 * This component takes User Info from main one and show it 
 */
export class ProfileHeaderCardComponent implements OnInit {
 
  /* All Info for the profile user: Input from MainProfileComponent */
  @Input() profileHeaderInfo:User;

  /*Is The Profile for The Authorized User (The one who made Log in): Input from MainProfileComponent */
  @Input() isAuthorisedUser: boolean;

  constructor() { }

  ngOnInit() {}

}
