import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";
import { Router } from "@angular/router";

/**
 * Home component.
 * Shows an html page with the navbar selector and kweeks selector.
*/
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  /**
   * Home component's constructor
   * @param data : DataService
   * @param router : Router
   */
  constructor(private data: DataService, private router: Router) {}

  /**
   * Empty ngOnInit
   */
  ngOnInit() {}
 
}
