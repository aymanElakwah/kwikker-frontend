import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ProfilesListComponent } from '../profiles-list/profiles-list.component';
import { KweekComponent } from '../kweek/kweek.component';
import { WhoToFollowComponent } from '../who-to-follow/who-to-follow.component';
import { TrendsComponent } from '../Profile/trends/trends.component';


@NgModule({
  declarations: [
  NavBarComponent,
  ProfilesListComponent,
  KweekComponent,
  WhoToFollowComponent,
  TrendsComponent
],

  imports: [
    CommonModule,
  ],
  
  exports: [
  NavBarComponent,
  ProfilesListComponent,
  KweekComponent,
  WhoToFollowComponent,
  TrendsComponent
]
})
export class SharedModule { }
