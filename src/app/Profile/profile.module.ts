import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module'
import { RouterModule } from '@angular/router';
import { MainProfileComponent } from './main-profile/main-profile.component';
import { ProfileHeaderCardComponent } from './profile-header-card/profile-header-card.component';
import { TrendsComponent } from './trends/trends.component';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [
    MainProfileComponent,
    ProfileHeaderCardComponent,
    TrendsComponent
  ],

  imports: [
    TabsModule.forRoot(),
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
