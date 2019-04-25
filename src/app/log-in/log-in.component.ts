import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { isNull } from 'util';
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

  constructor(private data: DataService , private router: Router) {

   }
   ngOnInit() {
     //if the user is already registered, no need to show him the log in page
    // if(!isNull( localStorage.getItem('TOKEN')))
    //   {
    //     this.router.navigate(['/home']);
    //   }
      this.msg =  document.querySelector('.progress');
    }
/**
   *
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
         console.log(res);
         localStorage.setItem('TOKEN', res.token);
         localStorage.setItem('username', this.mail);
         //when a regular user loggs out, he shold be redirected to the login page
         this.router.navigate(['/home']);
       },
        err => {
          console.log('error: ', err);
          this.showErrorMSg();
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
  public showErrorMSg() {
   this.msg.className = 'show';
  }

}