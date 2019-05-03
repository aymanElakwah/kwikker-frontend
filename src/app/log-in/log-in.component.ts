import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})


export class LogInComponent implements OnInit {
  public mail: string;
  public pass: string;
  public isLoggedIn: boolean;
  public msg: any;
  public msg2: any;
  public msg3: any;


  constructor(private data: DataService , private router: Router) {

   }
/**
 * A function called when initialiizing logInComponent.
 * It assigns values for msg and msg2, as they could only be assigned once.
 * @param void
 * @returns void
 */
   ngOnInit() {
      this.msg =  document.querySelector('.progress');
      this.msg2 =  document.querySelector('.progress2');
      this.msg3 =  document.querySelector('.progress3');
    }
/**
 * To check for user's information when logging in, and then send it to be posted in the backend
 * @param form {NgForm} it calls logInUser(user) to verify the logged in user and gets 
 * token after it and also could be null
 * @returns void
 */
  submitForm(form: NgForm) {
    this.isLoggedIn = false;
    const user = form.value;
    var ev: (err: any) => void;
    this.data.logInUser(user)
      .subscribe(
       res => {
         localStorage.setItem('TOKEN', res.token);
         localStorage.setItem('username', this.mail);
         //when a regular user loggs out, he shold be redirected to the login page
         this.router.navigate(['/home']);
       },
        err => {
          if (err.status == 404)
            this.showErrorMSg(1);
          else {
            if (err.status == 403)
              this.router.navigate['/resend_email'];
            else
          this.showErrorMSg(2);
          }
        }
    );
    this.isLoggedIn = true;
  }
  /**
   * Function to change the error box status from hide, to show
   * called when an error logging in exists.
   * @param void
   * @returns void
   */
  public showErrorMSg(type:number) {
    if(type == 1)
    {
      this.msg.className = 'show';
      this.msg2.className = 'hide';
      this.msg3.className = 'hide';
    }
    if(type == 2)
    {
      this.msg.className = 'hide';
      this.msg2.className = 'show';
      this.msg3.className = 'hide';
    }
    // if(type == 3)
    // {
    // this.msg.className = 'hide';
    // this.msg2.className = 'hide';
    // this.msg3.className = 'show';
    // }
     
  }

}