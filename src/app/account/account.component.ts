import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { DataService } from '../services/data.service'
import { delay } from 'q';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  /** usernmae of current user */
  userName:string = localStorage.getItem('username');
  /** emial of the user  */
  email:string = "blahblah@gmail.commm";
  /** saving current username to cross refrence it with the new one */
  oldUserName:string = this.userName
  /** saving current email to cross refrence it with the new one */
  oldEmail:string = this.email; 
  res:any;
  /** new password */
  newPassword:string="";
  /** to verify the new password (make sure it is the same) */
  verifyNewPassword:string="";
  /** old password */
  oldPassword: string = "";

  /**
   * empty constructor
   * @param account_service 
   */
  constructor(private account_service:DataService) { 
    
  }

  /**
   * empty ngOnInit
   */
  ngOnInit() {
    
  }

  /**
   * function to update username and email
   */
  SaveChanges(){
    if(this.userName != this.oldUserName)
    {
      this.account_service.updateUserName(this.userName, this.oldPassword).subscribe
      (response =>{
        this.res = response
        localStorage.setItem('TOKEN', response.token);
         localStorage.setItem('username', this.userName);
         this.oldUserName = this.userName;
        
      })
    }
    if(this.email != this.oldEmail){
      this.account_service.updateEmail(this.email).subscribe
      (response => {
        this.res = response
        console.log(response);
        if(response == "")
        {
          console.log("works")
          this.oldEmail = this.email;
        }
        else{
          console.log("dosen't work")
        }
      })
    }
  }

  /**
   * function ChangePassword to update the new password
   */
  ChangePassword(){
    this.account_service.updatePassword(this.newPassword, this.oldPassword).subscribe(
      response =>{
        this.newPassword = "";
        this.verifyNewPassword = "";
        localStorage.setItem('TOKEN', response.token);
      }
    )
  }
}
