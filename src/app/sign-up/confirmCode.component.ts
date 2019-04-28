import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-confirm-signUp',
    templateUrl: './confirm-signUp.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class confirmCode implements OnInit {
    public confirmCode: string;
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
        this.confirmCode  = this.route.snapshot.paramMap.get("code");
        var toSend = { 
          confirmation_code:this.confirmCode
       };
        this.data.signUpConfirm(toSend)
        .subscribe(
         res => {
           window.alert("Welcome, please log in")
           this.router.navigate(['login']);
         },
          err => {
            window.alert("An error occured, please check your email again!")
            this.router.navigate(['']);
          }
      );

      
    }


}
