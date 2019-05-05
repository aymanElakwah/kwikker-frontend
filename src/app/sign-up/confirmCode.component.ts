import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from "@angular/router";
/**
 * Confirm code component.
 * Sends the code to data services after snapping it from the url
 */
@Component({
    selector: 'app-confirm-signUp',
    templateUrl: './confirm-signUp.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class confirmCode implements OnInit {
  /**
   * The confirmation code snapped later from the URL.
   */
    public confirmCode: string;

  /**
   * confirm-code component's constructor
   * @param data for dataService's communications
   * @param router for navigating among pages
   * @param route to snapshot a value in the url
   */
    constructor(private data: DataService,private router: Router , private route: ActivatedRoute) {
    }
   /**
   *On initiallizing confirmCode component, 'TOKEN' is realized from the url.
   *Then sent to teh back-service to verify it.
   *Finally it redirects the user to home page if success, ohterwise, consule reports an error.
   * @param void
   * returns either success or error messages in the consule.
   * @returns void
   */
    ngOnInit() {
        this.confirmCode = this.route.snapshot.paramMap.get("code");
        var toSend = { 
          confirmation_code:this.confirmCode
       };
        this.data.signUpConfirm(toSend)
        .subscribe(
         res => {
           window.alert("Welcome, please log in")
           this.router.navigate(['/login']);
         },
          err => {
            window.alert("An error occured, please check your email again!")
            this.router.navigate(['']);
          } 
      );

      
    }


}
