import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../services/data.service';
import { Kweek } from '../model/kweek';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, TooltipPosition } from '@angular/material';
import { FormControl } from '@angular/forms';
import { KweeksService } from '../services/kweeks.service'  ;
import { Overlay } from '@angular/cdk/overlay';
@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css', '../kweek/kweek.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ReplyComponent implements OnInit {
  roots: Kweek[] = [];
  clickedKweek: Kweek;
  replies: Kweek[] = [];
  positionOption: TooltipPosition = 'above';
  position = new FormControl(this.positionOption);
  showDelay = new FormControl(50);
  hideDelay = new FormControl(50);
  constructor(public dialogRef: MatDialogRef<ReplyComponent>,
    private kweekService: DataService,
    private kweekFunc: KweeksService,
    private dialog: MatDialog,
    private overlay: Overlay
    ) { }

  ngOnInit() {
    // mockService
    // this.kweekService.getReplies1().subscribe(lists => {
    //   this.replies = lists;
    //   this.kweekFunc.injectTagsInText(this.replies);
    // });
    this.kweekService.getKweekReplies(this.clickedKweek.id).subscribe(lists => {
      this.replies = lists;
      this.kweekFunc.injectTagsInText(this.replies);
    });
  }

  nestedDialog(kweek: Kweek): void {
    this.roots.push(this.clickedKweek);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '640px';
    dialogConfig.autoFocus = false;
    dialogConfig.scrollStrategy = this.overlay.scrollStrategies.reposition();
    const dialogRef = this.dialog.open(ReplyComponent, dialogConfig);
    dialogRef.componentInstance.roots = this.roots;
    dialogRef.componentInstance.clickedKweek = kweek;
    this.dialogRef.close();
    dialogRef.afterClosed().subscribe(result => {
      this.roots = [];
      this.clickedKweek = null;
    });
  }

  likeOrUnlike(kweek: Kweek): void {
    this.kweekFunc.like(kweek);
  }

  rekweekOrUnRekweek(kweek: Kweek): void {
    this.kweekFunc.rekweek(kweek);
  }
}
