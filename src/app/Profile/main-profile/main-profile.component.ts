import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { Trend } from '../../model/Trend';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrls: ['./main-profile.component.css']
})
export class MainProfileComponent implements OnInit {

  profileUser: User;
  trends: Trend[];
  
  constructor(private profileInfoService: DataService, 
              private trendsService: DataService) { }

  ngOnInit() {
    this.profileInfoService.getProfileInfo("").subscribe
    ( userInfo => {this.profileUser = userInfo; } )

    this.profileInfoService.getTrends().subscribe
    ( trendsInfo => {this.trends = trendsInfo; } )
  }

}
