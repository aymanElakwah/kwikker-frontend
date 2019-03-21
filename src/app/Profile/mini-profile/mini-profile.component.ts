import { Component, OnInit, Input } from '@angular/core';
import { MiniUser } from '../../model/mini-user';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-mini-profile',
  templateUrl: './mini-profile.component.html',
  styleUrls: ['./mini-profile.component.css']
})
export class MiniProfileComponent implements OnInit {

  /* All Info for the profile user */
  public miniCardProfileUsers: MiniUser[];

  /* route children name which based on it, The right request will be sent */
  public routeChildName: string;

  constructor(private miniProfileInfoService: DataService,
               private route: ActivatedRoute) { }

  FollowersOrFollowings(): void
  {
    if (this.route.snapshot.firstChild != null)
    {
      this.routeChildName = this.route.snapshot.firstChild.toString();
    }
  }

  ngOnInit() {
    this.FollowersOrFollowings();
    if(this.routeChildName == 'followers')
    {
      this.miniProfileInfoService.getUserFollowers().subscribe
      ( usersInfo => {this.miniCardProfileUsers = usersInfo; } )
    }
    else if (this.routeChildName == 'following')
    {
      this.miniProfileInfoService.getUserFollowings().subscribe
      ( usersInfo => {this.miniCardProfileUsers = usersInfo; } )
    }
  }

}
