import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module'
import { RouterModule } from '@angular/router';
import { MainProfileComponent } from './main-profile/main-profile.component';
import { ProfileHeaderCardComponent } from './profile-header-card/profile-header-card.component';
import { MiniProfileComponent } from '../Profile/mini-profile/mini-profile.component';



@NgModule({
  declarations: [
    MainProfileComponent,
    ProfileHeaderCardComponent,
    MiniProfileComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'profile', component:  MainProfileComponent,
      children: [
        {path: '', redirectTo: 'profile', pathMatch: 'full'} ,
        {path: 'following', component: MainProfileComponent },
        {path: 'followers', component: MainProfileComponent},
        {path: 'likes', component: MainProfileComponent},
      ]} 
    ])
  ]
})

export class ProfileModule { }
