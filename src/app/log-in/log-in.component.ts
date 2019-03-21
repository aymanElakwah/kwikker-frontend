import { Component, OnInit } from '@angular/core';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { DataService } from '../services/data.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import {LogInModule} from './log-in.module';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
 
  public mail: string;
  public pass: string;
  public isLoggedIn: boolean;
 
  constructor(private data: DataService ,private router:Router) {
   

   }
/**
   * 
   * to check for user's information when logging in, and then send it to be posted in the backend
   * @param form {NgForm} it calls logInUser(user) to verify the logged in user and gets 
   * token after it and also could be null
   * @returns void
   */
  submitForm(form: NgForm){
    this.isLoggedIn = false;
    //before submitting anyhting, we need to validate the inputs
    if(this.mail.length < 2 )
      return;
      if(this.pass.length < 8)
      return;

    let user = form.value;
    this.data.logInUser(user)
      .subscribe(
       res=> {
         console.log(res);
         localStorage.setItem('token',res.token);
         localStorage.setItem('username', this.mail);
         this.router.navigate(['/home']);
       },
        err=> console.log('error: ',err)
      )
      
    this.isLoggedIn = true;
    
  }
  ngOnInit() {
  }

}