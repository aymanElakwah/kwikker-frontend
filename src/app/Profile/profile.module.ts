import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module'
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LyResizingCroppingImageModule } from '@alyle/ui/resizing-cropping-images';
import { LyButtonModule } from '@alyle/ui/button';
import { LyIconModule } from '@alyle/ui/icon';
import { BrowserModule } from '@angular/platform-browser';
import { MainProfileComponent } from './main-profile/main-profile.component';
import { ProfileHeaderCardComponent } from './profile-header-card/profile-header-card.component';
import { MiniProfileComponent } from '../Profile/mini-profile/mini-profile.component';
import { ProfileKweeksTabComponent } from '../Profile/profile-kweeks-tab/profile-kweeks-tab.component';
import { ProfileHeaderCardEditingComponent } from '../Profile/profile-header-card-editing/profile-header-card-editing.component';
import { EditImagesComponent } from '../Profile/edit-images/edit-images.component'
import { MaterialModule } from '../material.module';
import { CanActivateTeam } from '../app-routing.module';
import { ChatModule } from '../chat/chat.module';
//this one better left imported last
import { RouterModule } from '@angular/router';



/**
 * The Module That is resposible for The Profile Page
 */
@NgModule({
  declarations: [
    MainProfileComponent,                //The main architecture for the profile page
    ProfileHeaderCardComponent,          //Profile User Information Card
    MiniProfileComponent,                //Small card for any other user Information
    ProfileKweeksTabComponent, ProfileHeaderCardEditingComponent, //All Kweeks that written or liked By The profile user + Trends Tab 
    EditImagesComponent,         
  ],

  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
    InfiniteScrollModule,
    MaterialModule,
    FormsModule,
    LyResizingCroppingImageModule,
    LyButtonModule,
    LyIconModule,
    RouterModule.forChild([
      { path: 'profile/:username', component:  MainProfileComponent,canActivate:[CanActivateTeam],
      children: [
        {path: '', component: ProfileKweeksTabComponent},
        {path: 'kweeks', component: ProfileKweeksTabComponent},
        {path: 'following', component: MiniProfileComponent },
        {path: 'followers', component: MiniProfileComponent },
        {path: 'likes', component: ProfileKweeksTabComponent },
      ]} 
    ])
  ],
})

export class ProfileModule { 
}