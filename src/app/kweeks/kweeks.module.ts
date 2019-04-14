import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KweekComponent } from '../kweek/kweek.component';
import { ReplyComponent } from '../reply/reply.component';
import { MatDialogModule, MatTooltipModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImgFallbackModule } from 'ngx-img-fallback';
import { KweeksService } from '../services/kweeks.service';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    KweekComponent,
    ReplyComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    ImgFallbackModule,
    OverlayModule
  ],
  entryComponents: [
    ReplyComponent
  ],
  exports: [
    KweekComponent,
    ReplyComponent
  ],
  providers: [
    KweeksService
  ]
})
export class KweeksModule { }
