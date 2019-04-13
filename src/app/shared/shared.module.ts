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
import { NewKweekComponent } from '../new-kweek/new-kweek.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
  NavBarComponent,
  ProfilesListComponent,
  KweekComponent,
  TrendsComponent,
  NewKweekComponent
],

  imports: [
    CommonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    ImgFallbackModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
   entryComponents: [
     ReplyComponent,
     NewKweekComponent
   ],
  exports: [
  NavBarComponent,
  ProfilesListComponent,
  KweekComponent,
  TrendsComponent,
  NewKweekComponent
]
})
export class SharedModule { }
