import { Component, OnInit, Input } from '@angular/core';
import { Trend } from '../../model/Trend';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Kweek } from 'src/app/model/kweek';

@Component({
  selector: 'app-profile-kweeks-tab',
  templateUrl: './profile-kweeks-tab.component.html',
  styleUrls: ['./profile-kweeks-tab.component.css']
})
export class ProfileKweeksTabComponent implements OnInit {

    /* Array of Tredns */
    trends: Trend[] = [];

    /* Array of Kweeks */
    kweeks :Kweek[] = [];

   /* route children name which based on it, The right request will be sent */
  public routeChildName: string;

  constructor(private kweeksTabService: DataService,
              private route: ActivatedRoute) { }

   KweeksOrLikes(): void
  {
    if (this.route.snapshot.firstChild != null)
    {
       this.routeChildName = this.route.snapshot.children[0].toString();
    }
  }

  ngOnInit() 
  {
    this.kweeksTabService.getTrends().subscribe
    ( trendsInfo => {this.trends = trendsInfo; } )

    this. KweeksOrLikes();

    let userName = this.route.snapshot.params['username'];
    if(this.routeChildName == 'kweeks' || this.routeChildName == '' )
    {
      this.kweeksTabService.getUserKweeks(userName ,null).subscribe
      ( usersInfo => {this.kweeks = usersInfo; } )
    }
    else if (this.routeChildName == 'likes')
    {
      this.kweeksTabService.getUserLikedKweeks(userName ,null).subscribe
      ( usersInfo => {this.kweeks = usersInfo; } )
    }
  }

}
