import { Component, OnInit } from "@angular/core";
import { Kweek } from "../model/kweek";

/**
 * Delete confirmation popUp has cancel and delete button
 */
@Component({
  selector: "app-confirm-delete",
  templateUrl: "./confirm-delete.component.html",
  styleUrls: [
    "./confirm-delete.component.css",
    "../likes-rekweeks-list/likes-rekweeks-list.component.css",
    "../reply/reply.component.css",
    "../kweek/kweek.component.css"
  ]
})
export class ConfirmDeleteComponent implements OnInit {
  /**
   * Wanted to delete kweek
   */
  clickedKweek: Kweek;

  /**
   * constructor called when the component is made
   * No params
   */
  constructor() {}

  /**
   * function called after all intialization in constuctor used here to determine which kweeks to retreive
   * No Parameters
   */
  ngOnInit() {}
}
