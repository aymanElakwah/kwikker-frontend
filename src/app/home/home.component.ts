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
    // if (isNull(localStorage.getItem("TOKEN"))) {
    //   this.router.navigate(["/home"]);
    // } else {
    //   this.router.navigate(["/home"]);
    // }
    //localStorage.setItem("TOKEN","123");
  }
  /**
   *
   *Log out function, removes the Token and username saved in localStorage
   * @param form {NgForm} the Form parameter, which has all the 'log-out' form information
   * @returns void
   * it navigates to the main page 'welcome page'.
   */
  logOutUser() {
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("username");
    this.router.navigate(["/login"]);
  }
}
