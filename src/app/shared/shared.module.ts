import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ProfilesListComponent } from '../profiles-list/profiles-list.component';
import { KweekComponent } from '../kweek/kweek.component';
import { TrendsComponent } from '../Profile/trends/trends.component';
import { MatDialogModule, MatTooltipModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReplyComponent } from '../reply/reply.component';
import { ImgFallbackModule } from 'ngx-img-fallback';

@NgModule({
  declarations: [
  NavBarComponent,
  ProfilesListComponent,
  KweekComponent,
  TrendsComponent,
],

  imports: [
    CommonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    ImgFallbackModule
  ],
  entryComponents: [
    ReplyComponent
  ],
  exports: [
  NavBarComponent,
  ProfilesListComponent,
  KweekComponent,
  TrendsComponent
]
})
export class SharedModule { }
