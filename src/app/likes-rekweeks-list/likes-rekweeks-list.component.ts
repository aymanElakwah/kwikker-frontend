import { Component, OnInit } from "@angular/core";
import { Kweek } from "../model/kweek";
import { MiniUser } from "../model/mini-user";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-likes-rekweeks-list",
  templateUrl: "./likes-rekweeks-list.component.html",
  styleUrls: ["./likes-rekweeks-list.component.css"]
})
export class LikesRekweeksListComponent implements OnInit {
  likers: boolean;
  users: MiniUser[];
  clickedKweek: Kweek;
  constructor(private kweekService: DataService) {}

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
        .subscribe(likersList => {
          this.users = likersList;
        });
    }
  }

      // /** Username */
      // username: string;
      // /** User Screen Name => Must be unique */
      // screen_name: string;
      // /** Profile Picture URL */
      // profile_image_url: string;
      // /** If The Authorised User Block That User */
      // blocked: boolean;

}
