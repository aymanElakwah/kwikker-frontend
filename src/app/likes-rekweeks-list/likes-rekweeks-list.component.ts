import { Component, OnInit } from "@angular/core";
import { Kweek } from "../model/kweek";
import { MiniUser } from "../model/mini-user";
import { DataService } from "../services/data.service";

/**
 * likers or rekweekers list popUp has clicked kweek and the likers or rekweerker users displayed
 */
@Component({
  selector: "app-likes-rekweeks-list",
  templateUrl: "./likes-rekweeks-list.component.html",
  styleUrls: [
    "./likes-rekweeks-list.component.css",
    "../reply/reply.component.css",
    "../kweek/kweek.component.css"
  ]
})
export class LikesRekweeksListComponent implements OnInit {
  /**
   * if likers is:
   * true then it's a likers' list
   * false then it's a rekweekers' list
   */
  likers: boolean;
  /**
   * likers or rekweeker users
   */
  users: MiniUser[];
  /**
   * kweek that we want to see its likers or rekweerks list
   */
  clickedKweek: Kweek;
  /**
   * constructor called when the component is made
   * @param kweekService to connect with backend functions
   */
  constructor(private kweekService: DataService) {}

  /**
   * function called after all intialization in constuctor used here to determine which kweeks to retreive
   * No Parameters
   */
  ngOnInit() {
    if (this.likers) {
      this.kweekService
        .kweekLikers(this.clickedKweek.id)
        .subscribe(likersList => {
          this.users = likersList;
        });
    } else {
      this.kweekService
        .kweekRekweekers(this.clickedKweek.id)
        .subscribe(rekweekersList => {
          this.users = rekweekersList;
        });
    }
  }
}
