import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { isNull } from "util";
import { NewKweekComponent } from '../new-kweek/new-kweek.component';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private data: DataService, private router: Router) {}

  ngOnInit() {
    //when initializing the HomeComponent, check if the user is already logged-in and navigates him to the appropriate page.
    if (isNull(localStorage.getItem("TOKEN"))) {
      this.router.navigate(["/home"]);
    } else {
      this.router.navigate(["/home"]);
    }
    localStorage.setItem("TOKEN","123");
  }
 
}
