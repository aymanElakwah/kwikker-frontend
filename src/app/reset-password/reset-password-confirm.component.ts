import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';

/**
 * Confirm password component.
 * Sends the new password in the body of the request.
 * And the confirmation code in the header.
 */
@Component({
    selector: 'app-confirm-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.css']
})
export class confirmPassword implements OnInit {
    /**
     * class confirmPassword's variables.
     * string for confirmation code snapshoted from the url
     */
    public confirmCode: string;
    /**
    * class confirmPassword's variables.
    * string for password (ngModel) two ways binding
    */
    public pass: string;
    /**
    * class confirmPassword's variables.
    * string for confirmed password (ngModel) two ways binding
    */
    public confirm_pass: string;
    /**
    * class confirmPassword's variables.
    * string for email (ngModel) two ways binding
    */
    public mail: string;
    /**
     * class confirmPassword's variables.
     * variable used as a pointer to the error messages class, to show/hide them
     */
    public msg: any;
      

  /**
   * confirmPassword component's constructor
   * @param data for dataService's communications
   * @param router for navigating among pages
   * @param route to snapshot a value in the url
   */
    constructor(private data: DataService,private router: Router , private route: ActivatedRoute) {
    }
  /**
   * ngOnInit for confirm-password component
   * initialize some public data that used later
   */
  ngOnInit() {
        this.confirmCode  = this.route.snapshot.paramMap.get("code");
        this.msg =  document.querySelector('.errorBox'); 
    }
/**
   *This function is called when updating the password.
   * It takes the submitForm values and wrap the password in an object.
   * Then send it to sendPass() function, that pushes it to the backend server.
   * @param form {NgForm} 
   * stores new token if success mission, otherwise returns an error
   * @returns void
   */
public sendPassword(form: NgForm) {
  var toSend = { 
    password: form.value.pass,
 }; 
  
  this.data.sendPass(toSend, this.confirmCode)
 
    .subscribe(
      res => {
        window.alert("Password reset successfully.")
        this.router.navigate(['/login']);
      },
      err => {
          if (err.status == 401)
          {
            window.alert("Unauthorized user, please send your email for verification link");
            this.router.navigate(['/resend_email']);
          }
          else
            this.showError();
      }
  );
  }
/**
   * Function to change the error box status from hide, to show
   * called when an error sending email exists.
   * @param void
   * @returns void
   */
  public showError() {
    this.msg.className = 'show';
    this.router.navigate(['/login']);
  }

}
