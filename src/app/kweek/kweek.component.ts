import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { Kweek } from '../model/kweek';
import { ActivatedRoute, Router } from '@angular/router';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
  TooltipPosition
} from '@angular/material';
import { FormControl } from '@angular/forms';
import { ReplyComponent } from '../reply/reply.component';
import { KweeksService } from '../services/kweeks.service';
import { Overlay } from '@angular/cdk/overlay';
@Component({
  selector: 'app-kweek',
  templateUrl: './kweek.component.html',
  styleUrls: ['./kweek.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class KweekComponent implements OnInit {
  clickedKweek: Kweek;
  positionOption: TooltipPosition = 'above';
  position = new FormControl(this.positionOption);
  showDelay = new FormControl(50);
  hideDelay = new FormControl(50);
  kweeks: Kweek[] = [];

  /* route children name which based on it, The right request will be sent */
  public routeChildName: string;

  /*
   * constructor called when component is made
   * @param kweekService to use DataService functions and deal with backend
   * @param route to use snapshot from the url to know which URL you are in
   * No @return
   */
  constructor(
    private kweekService: DataService,
    private kweekFunc: KweeksService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private overlay: Overlay
  ) {}

  /**
   * function called after all intialization in constuctor used here to determine which kweeks to retreive
   * No Parameters
   * No reurn
   */
  ngOnInit() {
    // if (this.popUpMode) {
    // } else {

      this.kweekService.getUserKweeks(this.route.snapshot.root.children[0].params['username'], null).subscribe(lists => {
        this.kweeks = lists;
        this.kweekFunc.injectTagsInText(this.kweeks);
      });
    // }
    // mock service
    // this.kweekService.getKweeks().subscribe(lists => {
    //   this.kweeks = lists;
    //   this.kweekFunc.injectTagsInText(this.kweeks);
    // });

    /* // This part will be updated
    this.KweeksType();
    const userName = this.route.snapshot.params.username;
    this.kweekService.getUserKweeks(userName, null).subscribe(usersInfo => {
      this.kweeks = usersInfo;
      this.kweekFunc.injectTagsInText(this.kweeks);
    }); */
    // if (this.routeChildName === 'kweeks' || this.routeChildName === '') {
    //   this.kweekService.getUserKweeks(userName, null).subscribe(usersInfo => {
    //     this.kweeks = usersInfo;
    //     this.kweekFunc.injectTagsInText(this.kweeks);
    //   });
    // } else if (this.routeChildName === 'likes') {
    //   this.kweekService
    //     .getUserLikedKweeks(userName, null)
    //     .subscribe(usersInfo => {
    //       this.kweeks = usersInfo;
    //       this.kweekFunc.injectTagsInText(this.kweeks);
    //     });
    // }
    // else {
    //   this.kweekService.getKweeks().subscribe(lists => {
    //     this.kweeks = lists;
    //     this.kweekFunc.injectTagsInText(this.kweeks);
    //   });
    // }
  }

  /* // will be Updated
  KweeksType(): void {
    if (this.route.snapshot.firstChild != null) {
      this.routeChildName = this.route.snapshot.children[0].toString();
    }
  }

  /**
   * open pop ups of replays
   * No parameters
   * @returns void
   */
  openDialog(kweek: Kweek): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '640px';
    dialogConfig.autoFocus = false;
    // dialogConfig.scrollStrategy = this.overlay.scrollStrategies.reposition();
    const dialogRef = this.dialog.open(ReplyComponent, dialogConfig);
    dialogRef.componentInstance.clickedKweek = kweek;
    dialogRef.afterClosed().subscribe(result => {
      this.clickedKweek = null;
    });
  }

  likeOrUnlike(kweek: Kweek): void {
    this.kweekFunc.like(kweek);
  }

  RekweekOrUnRekweek(kweek: Kweek): void {
    this.kweekFunc.rekweek(kweek);
  }
}
