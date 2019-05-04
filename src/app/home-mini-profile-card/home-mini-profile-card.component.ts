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

  ngOnInit()  {
    this.ProfileUserName = localStorage.getItem("username");
    this.profileCardService.getProfileInfo(this.ProfileUserName).subscribe(
      userInfo => {  this.ProfileInfo = userInfo; },
          err  => {  this.router.navigateByUrl("/error"); });
  }

}
