import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ProfilesListComponent } from '../profiles-list/profiles-list.component';
import { TrendsComponent } from '../Profile/trends/trends.component';
import { KweeksModule } from '../kweeks/kweeks.module';

@NgModule({
  declarations: [
  NavBarComponent,
  ProfilesListComponent,
  TrendsComponent
  ],

  imports: [
    CommonModule,
    KweeksModule
  ],

  exports: [
  NavBarComponent,
  ProfilesListComponent,
  TrendsComponent,
  KweeksModule
  ]
})
export class SharedModule { }
