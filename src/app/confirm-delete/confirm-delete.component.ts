import { Component, OnInit } from "@angular/core";
import { Kweek } from '../model/kweek';

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
  clickedKweek: Kweek;
  constructor() {}

  ngOnInit() {}
}
