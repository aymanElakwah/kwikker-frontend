import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KweekComponent } from '../kweek/kweek.component';
import { ReplyComponent } from '../reply/reply.component';
import { MatDialogModule, MatTooltipModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImgFallbackModule } from 'ngx-img-fallback';
import { KweeksService } from '../services/kweeks.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { LikesRekweeksListComponent } from '../likes-rekweeks-list/likes-rekweeks-list.component';
import { NewKweekComponent } from '../new-kweek/new-kweek.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LikersListComponent } from '../likers-list/likers-list.component';
import { RekweekersListComponent } from '../rekweekers-list/rekweekers-list.component';

@NgModule({
  declarations: [
    KweekComponent,
    ReplyComponent,
    NewKweekComponent,
    LikesRekweeksListComponent,
    LikersListComponent,
    RekweekersListComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    ImgFallbackModule,
    OverlayModule,
    MatIconModule,
    FormsModule,
    RouterModule
  ],
  entryComponents: [
    ReplyComponent,
    LikesRekweeksListComponent,
    NewKweekComponent,
  ],
  exports: [
    KweekComponent,
    ReplyComponent,
    NewKweekComponent
  ],
  providers: [
    KweeksService
  ]
})
export class KweeksModule { }
