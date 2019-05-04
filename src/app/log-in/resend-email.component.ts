import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-resend-email',
  templateUrl: './resend-email.component.html',
  styleUrls: ['../reset-password/reset-password.component.css']
})

export class ResendEmailComponent implements OnInit {
   
    public msg: any;
    public mail: string;
    constructor(private data: DataService , private router: Router) {
  
     }
  
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
    this.data.sendEmail2(email)
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