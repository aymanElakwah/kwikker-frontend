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
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';

@NgModule({
  declarations: [
    KweekComponent,
    ReplyComponent,
    NewKweekComponent,
    LikesRekweeksListComponent,
    ConfirmDeleteComponent
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
    RouterModule,
    InfiniteScrollModule
  ],
  entryComponents: [
    ReplyComponent,
    LikesRekweeksListComponent,
    NewKweekComponent,
    ConfirmDeleteComponent
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
