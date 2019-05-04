import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-mini-profile-card',
  templateUrl: './home-mini-profile-card.component.html',
  styleUrls: ['./home-mini-profile-card.component.css']
})
export class HomeMiniProfileCardComponent implements OnInit {

  ProfileUserName: string;
  ProfileInfo: User; 

  constructor(private profileCardService: DataService,
              private router: Router) { }

  /**
   * Open User Profile when his Profile Picture Clicked 
   *  @param index The Number of MiniUser in The Array to Send The Appropiate request  
   */  
  openUserProfile()
  {
    this.router.navigate(['/profile/'+ this. ProfileInfo.username]);
  }

  /**
   * Get The Username From The Local Storage And Send The Request
   * To Get Its Data,
   * In error case, Naviagte To The Error Page  
   */  
  ngOnInit()  {
    this.ProfileUserName = localStorage.getItem("username");
    this.profileCardService.getProfileInfo(this.ProfileUserName).subscribe(
      userInfo => {  this.ProfileInfo = userInfo; },
          err  => {  this.router.navigateByUrl("/error"); });
  }

}
