// import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { DataService } from '../services/data.service';
// import { Kweek } from '../model/kweek';
// import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA, MatDialogRef, TooltipPosition } from '@angular/material';
// import { FormControl } from '@angular/forms';
// import { KweeksService } from '../services/kweeks.service';

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../services/data.service';
import { Kweek } from '../model/kweek';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, TooltipPosition } from '@angular/material';
import { FormControl } from '@angular/forms';
import { KweeksService } from '../services/kweeks.service'  ;
@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['../kweek/kweek.component.css', './reply.component.css' ],
  encapsulation: ViewEncapsulation.None,
})
export class ReplyComponent implements OnInit {
  roots: Kweek[] = [];
  replies: Kweek[] = [];
  positionOption: TooltipPosition = 'above';
  position = new FormControl(this.positionOption);
  showDelay = new FormControl(50);
  hideDelay = new FormControl(50);
  constructor(public dialogRef: MatDialogRef<ReplyComponent>,
    private kweekService: DataService,
    private kweekFunc: KweeksService,
    private dialog: MatDialog
    ) { }

  ngOnInit() {
    this.kweekService.getReplies1().subscribe(lists => {
      this.replies = lists;
      this.kweekFunc.injectTagsInText(this.replies);
    });
  }

  nestedDialog(kweek: Kweek): void {
    this.roots.push(kweek);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '640px';
    dialogConfig.autoFocus = false;
    const dialogRef = this.dialog.open(ReplyComponent, dialogConfig);
    dialogRef.componentInstance.roots = this.roots;
    this.dialogRef.close();
    dialogRef.afterClosed().subscribe(result => {
      this.roots = [];
    });
  }

  likeOrUnlike(kweek: Kweek): void {
    this.kweekFunc.like(kweek);
  }

  rekweekOrUnRekweek(kweek: Kweek): void {
    this.kweekFunc.rekweek(kweek);
  }
}
