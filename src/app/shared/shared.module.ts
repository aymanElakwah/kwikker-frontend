import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ProfilesListComponent } from '../profiles-list/profiles-list.component';
import { KweekComponent } from '../kweek/kweek.component';
import { WhoToFollowComponent } from '../who-to-follow/who-to-follow.component';

import { RouterModule } from '@angular/router'; //will be deleted


@NgModule({
  declarations: [
  NavBarComponent,
  ProfilesListComponent,
  KweekComponent,
  WhoToFollowComponent
],

  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "kweek", component: KweekComponent },
    ]),
  ],
  
  exports: [
  NavBarComponent,
  ProfilesListComponent,
  KweekComponent,
  WhoToFollowComponent,
]
})
export class SharedModule { }
