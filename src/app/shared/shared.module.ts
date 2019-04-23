import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ProfilesListComponent } from '../profiles-list/profiles-list.component';
import { TrendsComponent } from '../Profile/trends/trends.component';
import { MatDialogModule, MatTooltipModule, MAT_DIALOG_DATA } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReplyComponent } from '../reply/reply.component';
import { ImgFallbackModule } from 'ngx-img-fallback';
import { NewKweekComponent } from '../new-kweek/new-kweek.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , FormGroup}   from '@angular/forms'
import { KweeksModule } from '../kweeks/kweeks.module';
import { KweekComponent } from '../kweek/kweek.component';
import { EditImagesComponent } from '../Profile/edit-images/edit-images.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
  NavBarComponent,
  ProfilesListComponent,
  TrendsComponent,
  NewKweekComponent,
  
  ],

  imports: [
    CommonModule,
    KweeksModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    ImgFallbackModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule,
    RouterModule,
    
  ],

   entryComponents: [
     ReplyComponent,
     NewKweekComponent,
     EditImagesComponent,
   ],
  exports: [
  NavBarComponent,
  ProfilesListComponent,
  TrendsComponent,
  KweeksModule,
  KweekComponent,
  TrendsComponent,
  NewKweekComponent
]
})
export class SharedModule { }
