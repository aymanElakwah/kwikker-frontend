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

@NgModule({
  declarations: [
    KweekComponent,
    ReplyComponent,
    NewKweekComponent,
    LikesRekweeksListComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    ImgFallbackModule,
    OverlayModule,
    MatIconModule,
    FormsModule
  ],
  entryComponents: [
    ReplyComponent,
    LikesRekweeksListComponent,
    NewKweekComponent,
    LikesRekweeksListComponent
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
