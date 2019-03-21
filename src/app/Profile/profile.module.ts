import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module'
import { RouterModule } from '@angular/router';
import { MainProfileComponent } from './main-profile/main-profile.component';
import { ProfileHeaderCardComponent } from './profile-header-card/profile-header-card.component';
import { MiniProfileComponent } from '../Profile/mini-profile/mini-profile.component';
import { ProfileKweeksTabComponent } from '../Profile/profile-kweeks-tab/profile-kweeks-tab.component';


@NgModule({
  declarations: [
    MainProfileComponent,
    ProfileHeaderCardComponent,
    MiniProfileComponent,
    ProfileKweeksTabComponent,
  ],

  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: ':username', component:  MainProfileComponent,
      children: [
        {path: '', component: ProfileKweeksTabComponent } ,
        {path: 'kweeks', component: ProfileKweeksTabComponent},
        {path: 'following', component: MiniProfileComponent },
        {path: 'followers', component: MiniProfileComponent },
        {path: 'likes', component: ProfileKweeksTabComponent }
      ]} 
    ])
  ]
})

export class ProfileModule { }
