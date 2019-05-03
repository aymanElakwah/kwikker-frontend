import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-reset-password',
  templateUrl: './enter-email.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  //Public variables
  public confirmCode: string;
  public msg: any;
  public pass: string;
  public confirm_pass: string;
  public mail: string;

  /**
   * Reset-password component's constructor
   * @param data for dataService's communications
   * @param router for navigating among pages
   */
    constructor(private data: DataService,private router: Router ) {
    }
/**
 * ngOnInit for Reset-password component
 * initialize some public data that used later
 */
    ngOnInit() {
      this.msg =  document.querySelector('.errorBox');  
    }
    
    /**
   *This function is called when sending new email to take a reset-password link.
   * It takes the submitForm values and wrap the email in an object.
   * Then send it to sendEmail() function, that pushes it to the backend server
   * @param form {NgForm} 
   * returns either success or error messages in the consule.
   * @returns void
   */
    emailSent(form: NgForm) {
      const email = form.value;
      this.data.sendEmail(email)
        .subscribe(
         res => {
           
           window.alert("Thank you, please check your email for verification link");
           this.router.navigate(['/login']);
         },
          err => {
            console.log('error: ', err);
            this.appearError();
             }
      );
    }
    /**
   * Function to change the error box status from hide, to show
   * called when an error sending email exists.
   * @param void
   * @returns void
   */
    public appearError() {
      this.msg.className = 'show';
    }

}
