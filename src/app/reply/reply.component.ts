import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { DataService } from "../services/data.service";
import { Kweek } from "../model/kweek";

import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
  TooltipPosition
} from "@angular/material";
import { FormControl } from "@angular/forms";
import { KweeksService } from "../services/kweeks.service";
import { Overlay } from "@angular/cdk/overlay";
import { LikesRekweeksListComponent } from '../likes-rekweeks-list/likes-rekweeks-list.component';
import { NewKweekComponent } from '../new-kweek/new-kweek.component';
@Component({
  selector: "app-reply",
  templateUrl: "./reply.component.html",
  styleUrls: ["./reply.component.css", "../kweek/kweek.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class ReplyComponent implements OnInit {
  roots: Kweek[] = [];
  clickedKweek: Kweek;
  replies: Kweek[] = [];
  positionOption: TooltipPosition = "above";
  position = new FormControl(this.positionOption);
  showDelay = new FormControl(50);
  hideDelay = new FormControl(50);
  busyRequest: Boolean = false;

  /* The Authorized User (The one who made Log in) */
  authorizedUser: string = localStorage.getItem("username");

  constructor(
    public dialogRef: MatDialogRef<ReplyComponent>,
    public dialogLikersRekweekersRef: MatDialogRef<LikesRekweeksListComponent>,
    public dialogList: MatDialog,
    private kweekService: DataService,
    private kweekFunc: KweeksService,
    private dialog: MatDialog,
    private overlay: Overlay
  ) {}

  /**
   * load replies of a certian kweek with specific kweek id
   * No @params
   * No @returns
   */
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

  /**
   * close popup when another nested popup appear and open the new popup
   * @param kweek
   * No @returns
   */
  nestedDialog(kweek: Kweek): void {
    this.roots.push(this.clickedKweek);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "640px";
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

  /**
   * close popup when another nested popup appear and open the new popup
   * @param kweek
   * No @returns
   */
  likersDialog(kweek: Kweek): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "520px";
    const dialogRef = this.dialogList.open(LikesRekweeksListComponent, dialogConfig);
    dialogRef.componentInstance.clickedKweek = kweek;
    dialogRef.componentInstance.likers = true;
    this.dialogLikersRekweekersRef.close();
  }

  /**
   * close popup when another nested popup appear and open the new popup
   * @param kweek
   * No @returns
   */
  rekweekersDialog(kweek: Kweek): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "520px";
    const dialogRef = this.dialogList.open(LikesRekweeksListComponent, dialogConfig);
    dialogRef.componentInstance.clickedKweek = kweek;
    dialogRef.componentInstance.likers = false;
    this.dialogLikersRekweekersRef.close();
  }
  /**
   * calling function to like kweek from service which has the common replies and kweeks functions
   * @param kweek
   * No @returns
   */
  like(kweek: Kweek): void {
    if (!this.busyRequest) {
      this.busyRequest = true;
      this.kweekFunc.like(kweek);
      this.busyRequest = false;
    }
  }

  /**
   * calling function to unlike kweek from service which has the common replies and kweeks functions
   * @param kweek
   * No @returns
   */
  unlike(kweek: Kweek): void {
    if (!this.busyRequest) {
      this.busyRequest = true;
      this.kweekFunc.unlike(kweek);
      this.busyRequest = false;
    }
  }

  /**
   * call the function rekweek the kweek from data service which deal with backend
   * @param kweek
   * No @returns
   */
  rekweek(kweek: Kweek): void {
    if (!this.busyRequest) {
      this.busyRequest = true;
      this.kweekFunc.rekweek(kweek);
      this.busyRequest = false;
    }
  }

  /**
   * call the function unrekweek the kweek from data service which deal with backend
   * @param kweek
   * No @returns
   */
  unrekweek(kweek: Kweek): void {
    if (!this.busyRequest) {
      this.busyRequest = true;
      this.kweekFunc.unrekweek(kweek);
      this.busyRequest = false;
    }
  }

  /**
   * calling function to delete kweek from service which has the common replies and kweeks functions
   * @param kweek
   * No @returns
   */
  deleteRoot_ClickedKweek(kweek: Kweek): void {
    if (!this.busyRequest) {
      this.busyRequest = true;
      this.kweekService.deleteKweek(kweek.id).subscribe(() => {
        this.dialogRef.close();
        this.busyRequest = false;
      });
    }
  }

  /**
   * calling function to delete kweek from service which has the common replies and kweeks functions
   * @param kweek
   * No @returns
   */
  deleteReply(kweek: Kweek): void {
    if (!this.busyRequest) {
      this.busyRequest = true;
      this.kweekService.deleteKweek(kweek.id).subscribe(() => {
        const indexToDelete = this.replies.indexOf(kweek);
        this.replies.splice(indexToDelete, 1);
        this.busyRequest = false;
      });
    }
  }

  reply(kweek: Kweek): void {
    const dialogRef = this.dialog.open(NewKweekComponent, {
      panelClass: 'kweekBox'
    });
    dialogRef.componentInstance.kweek = kweek;
    dialogRef.componentInstance.reply = true;
  }

}
