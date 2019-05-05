import { Component, OnInit, ViewEncapsulation, Inject } from "@angular/core";
import { DataService } from "../services/data.service";
import { Kweek } from "../model/kweek";

import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
  TooltipPosition,
  MAT_DIALOG_DATA
} from "@angular/material";
import { FormControl } from "@angular/forms";
import { KweeksService } from "../services/kweeks.service";
import { Overlay } from "@angular/cdk/overlay";
import { LikesRekweeksListComponent } from "../likes-rekweeks-list/likes-rekweeks-list.component";
import { NewKweekComponent } from "../new-kweek/new-kweek.component";
import { ConfirmDeleteComponent } from "../confirm-delete/confirm-delete.component";

/**
 * Reply component
 * roots' kweeks above clicked kweek
 * clicked Kweek
 * replies' kweeks below clicked kweek
 */
@Component({
  selector: "app-reply",
  templateUrl: "./reply.component.html",
  styleUrls: ["./reply.component.css", "../kweek/kweek.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class ReplyComponent implements OnInit {
  /**
   * kweeks above clicked kweek
   */
  roots: Kweek[] = [];
  /**
   * kweek which I clicked to open the popup
   */
  clickedKweek: Kweek;
  /**
   * kweeks below clicked kweek
   */
  replies: Kweek[] = [];
  /**
   * position option for tooltip
   */
  positionOption: TooltipPosition = "above";
  /**
   * position form option for tooltip
   */
  position = new FormControl(this.positionOption);
  /**
   * Time on delay before showing tooltip
   */
  showDelay = new FormControl(50);
  /**
   * Time on delay before hiding tooltip
   */
  hideDelay = new FormControl(50);
  /**
   * To see if the request is done to do another request and it is checked at the beginning of some functions
   */
  busyRequest: Boolean = false;
  /**
   * The Authorized User (The one who made Log in)
   */
  authorizedUser: string = localStorage.getItem("username");

  /**
   * constructor called when component is made
   * @param dialogRef a reference to a reply popup dialog to open it or close it ... etc
   * @param dialogLikersRekweekersRef a reference to a likers-rekweekers-list popup dialog to open it or close it ... etc
   * @param data used to pass data between the component before open the dialog and the entry component 
   * @param kweekService to use DataService functions and deal with backend
   * @param kweekFunc to use kweeksService functions which has common kweeks functions
   * @param dialog to open and close dialogs
   * @param overlay to open popup when hover on userName in the (updated comming version)
   */
  constructor(
    public dialogRef: MatDialogRef<ReplyComponent>,
    public dialogLikersRekweekersRef: MatDialogRef<LikesRekweeksListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private kweekService: DataService,
    private kweekFunc: KweeksService,
    private dialog: MatDialog,
    private overlay: Overlay
  ) {}

  /**
   * load replies of a certian kweek with specific kweek id
   * No params
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
   * @param kweek kweek to be clickedKweek in the new popup
   * @returns
   */
  nestedDialog(kweek: Kweek): void {
    this.roots.push(this.clickedKweek);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "auto"; // 640px
    dialogConfig.autoFocus = false;
    dialogConfig.panelClass = "custom-dialog-container";
    dialogConfig.data = this.data;
    // dialogConfig.scrollStrategy = this.overlay.scrollStrategies.reposition();
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
   * @param kweek kweek to open likers dialog
   * @returns
   */
  likersDialog(kweek: Kweek): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "auto"; //520px
    dialogConfig.autoFocus = false;
    dialogConfig.panelClass = "custom-dialog-container";
    const dialogLikersRekweekersRef = this.dialog.open(
      LikesRekweeksListComponent,
      dialogConfig
    );
    dialogLikersRekweekersRef.componentInstance.clickedKweek = kweek;
    dialogLikersRekweekersRef.componentInstance.likers = true;
  }

  /**
   * close popup when another nested popup appear and open the new popup
   * @param kweek kweek to open rekweekers dialog
   * @returns
   */
  rekweekersDialog(kweek: Kweek): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "auto"; //520px
    dialogConfig.autoFocus = false;
    dialogConfig.panelClass = "custom-dialog-container";
    const dialogLikersRekweekersRef = this.dialog.open(
      LikesRekweeksListComponent,
      dialogConfig
    );
    dialogLikersRekweekersRef.componentInstance.clickedKweek = kweek;
    dialogLikersRekweekersRef.componentInstance.likers = false;
  }

  /**
   * calling function to like kweek from service which has the common replies and kweeks functions
   * @param kweek kweek to like
   * @returns
   */
  like(kweek: Kweek): void {
    if (!this.busyRequest) {
      this.busyRequest = true;
      this.kweekService.likeKweek(kweek.id).subscribe(()=> {
        kweek.liked_by_user = true;
        kweek.number_of_likes++;
        this.busyRequest = false;
      });
    }
  }

  /**
   * calling function to unlike kweek from service which has the common replies and kweeks functions
   * @param kweek kweek to unlike
   * @returns
   */
  unlike(kweek: Kweek): void {
    if (!this.busyRequest) {
      this.busyRequest = true;
      this.kweekService.unlikeKweek(kweek.id).subscribe(() => {
        kweek.liked_by_user = false;
        kweek.number_of_likes--;
        this.busyRequest = false;
      });
    }
  }

  /**
   * call the function rekweek the kweek from data service which deal with backend
   * @param kweek kweek to rekweek
   * @returns
   */
  rekweek(kweek: Kweek): void {
    if (!this.busyRequest) {
      this.busyRequest = true;
      this.kweekService.rekweekKweek(kweek.id).subscribe(() => {
        kweek.rekweeked_by_user = true;
        kweek.number_of_rekweeks++;
        this.busyRequest = false;
      });
    }
  }

  /**
   * call the function unrekweek the kweek from data service which deal with backend
   * @param kweek kweek to unrekweek
   * @returns
   */
  unrekweek(kweek: Kweek): void {
    if (!this.busyRequest) {
      this.busyRequest = true;
      this.kweekService.unrekweekKweek(kweek.id).subscribe(() => {
        kweek.rekweeked_by_user = false;
        kweek.number_of_rekweeks--;
        this.busyRequest = false;
      });
    }
  }

  /**
   * open confirm delete popUp and wait for confirmation res if true call delete root or clickedKweek action function
   * @param kweek kweek to delete
   * @returns
   */
  deleteRoot_ClickedKweek(kweek: Kweek): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "auto"; //520px
    dialogConfig.autoFocus = false;
    dialogConfig.panelClass = "custom-dialog-container";
    const confirmDeleteRef = this.dialog.open(
      ConfirmDeleteComponent,
      dialogConfig
    );
    confirmDeleteRef.componentInstance.clickedKweek = kweek;
    confirmDeleteRef.afterClosed().subscribe(res => {
      if (res) {
        this.deleteActionRoot_ClickedKweek(kweek);
      }
    });
  }

  /**
   * calling function to delete kweek from service which has the common replies and kweeks functions
   * @param kweek kweek to delte
   * @returns
   */
  deleteActionRoot_ClickedKweek(kweek: Kweek): void {
    if (!this.busyRequest) {
      this.busyRequest = true;
      this.kweekService.deleteKweek(kweek.id).subscribe(() => {
        let indexToDelete = this.data.kweeks.findIndex(element => {
          return element.id === kweek.id;
        });
        while (indexToDelete !== -1) {
          this.data.kweeks.splice(indexToDelete, 1);
          indexToDelete = this.data.kweeks.findIndex(element => {
            return element.id === kweek.id;
          });
        }
        this.dialogRef.close();
        this.busyRequest = false;
      });
    }
  }

  /**
   * open confirm delete popUp and wait for confirmation res if true call delete reply action function
   * @param kweek kweek to delete
   * @returns
   */
  deleteReply(kweek: Kweek): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "auto"; //620px
    dialogConfig.autoFocus = false;
    dialogConfig.panelClass = "custom-dialog-container";
    const confirmDeleteRef = this.dialog.open(
      ConfirmDeleteComponent,
      dialogConfig
    );
    confirmDeleteRef.componentInstance.clickedKweek = kweek;
    confirmDeleteRef.afterClosed().subscribe(res => {
      if (res) {
        this.deleteActionReply(kweek);
      }
    });
  }

  /**
   * calling function to delete kweek from service which has the common replies and kweeks functions
   * @param kweek kweek to delete
   * @returns
   */
  deleteActionReply(kweek: Kweek): void {
    if (!this.busyRequest) {
      this.busyRequest = true;
      this.kweekService.deleteKweek(kweek.id).subscribe(() => {
        let indexToDelete = this.data.kweeks.findIndex(element => {
          return element.id === kweek.id;
        });
        while (indexToDelete !== -1) {
          this.data.kweeks.splice(indexToDelete, 1);
          indexToDelete = this.data.kweeks.findIndex(element => {
            return element.id === kweek.id;
          });
        }
        const indexToDeleteFromReplies = this.replies.indexOf(kweek);
        this.replies.splice(indexToDeleteFromReplies, 1);
        this.busyRequest = false;
      });
    }
  }

  /**
   * Open Reply popUp
   * @param kweek  kweek to reply on
   */
  Reply(kweek: Kweek): void {
    const dialogRef = this.dialog.open(NewKweekComponent, {
      panelClass: "kweekBox"
    });
    dialogRef.componentInstance.kweek = kweek;
    dialogRef.componentInstance.reply = true;
    dialogRef.componentInstance.kweekTO = false;
  }
}
