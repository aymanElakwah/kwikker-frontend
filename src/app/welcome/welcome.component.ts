import { Component, OnInit } from '@angular/core';
import { isNull } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
/**
   * welcome component's constructor
   * @param router for navigating among pages
   * Does a simple check, for mor esecurity, if only the user does have a recorded token then he can access the home page.
   */
  constructor(private router: Router) { 

    if(!isNull( localStorage.getItem("TOKEN")))
    {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {

  }

}
