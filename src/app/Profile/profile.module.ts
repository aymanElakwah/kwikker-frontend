import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module'
import { RouterModule } from '@angular/router';
import { MainProfileComponent } from './main-profile/main-profile.component';
import { ProfileHeaderCardComponent } from './profile-header-card/profile-header-card.component';



@NgModule({
  declarations: [
    MainProfileComponent,
    ProfileHeaderCardComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'Profile', component: MainProfileComponent,
      children: [
        {path: '', redirectTo: 'Profile', pathMatch: 'full'} ,
        {path: 'following', component: MainProfileComponent },
        {path: 'followers', component: MainProfileComponent},
        {path: 'likes', component: MainProfileComponent}
      ]} 
    ])
  ]
})

export class ProfileModule { }
