import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module'
import { RouterModule } from '@angular/router';
import { MainProfileComponent } from './main-profile/main-profile.component';
import { ProfileHeaderCardComponent } from './profile-header-card/profile-header-card.component';
import { MiniProfileComponent } from '../Profile/mini-profile/mini-profile.component';
import { ProfileKweeksTabComponent } from '../Profile/profile-kweeks-tab/profile-kweeks-tab.component';


/**
 * The Module That is resposible for The Profile Page
 */
@NgModule({
  declarations: [
    MainProfileComponent,                //The main architecture for the profile page
    ProfileHeaderCardComponent,          //Profile User Information Card
    MiniProfileComponent,                //Small card for any other user Information
    ProfileKweeksTabComponent,           //All Kweeks that written or liked By The profile user + Trends Tab 
  ],

  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'profile/:username', component:  MainProfileComponent,
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
