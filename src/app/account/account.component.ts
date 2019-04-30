import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { DataService } from '../services/data.service'
import { delay } from 'q';
import { AlertComponentComponent } from '../alert-component/alert-component.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  /** usernmae of current user */
  userName:string = localStorage.getItem('username');
  /** emial of the user  */
  email:string;
  /** saving current username to cross refrence it with the new one */
  oldUserName:string = this.userName;
  /** saving current email to cross refrence it with the new one */
  oldEmail:string;
  res:any;
  /** new password */
  newPassword:string="";
  /** to verify the new password (make sure it is the same) */
  verifyNewPassword:string="";
  /** old password */
  oldPassword: string = "";
  emialResponseObject:any;
  
  /**
   * empty constructor
   * @param account_service 
   */
  constructor(private account_service:DataService,private dialog: MatDialog) { 
    
  }

  /**
   * empty ngOnInit
   */
  ngOnInit() {
    this.account_service.getEmail().subscribe
    (res => {
      this.emialResponseObject = res;
      this.email = this.emialResponseObject.email;
      this.oldEmail = this.email;
      
    })

  }

  /**
   * function to update username and email
   */
  SaveChanges(){
    if(this.email != this.oldEmail){
      this.account_service.updateEmail(this.email).subscribe
      (response => {
        this.res = response
        if (response === "") {
          this.giveAlert("Email Changed Sucessfuly");
        }
        else{
          this.giveAlert("Email didn't change please try again");
        }
      })
    }
    if(this.userName != this.oldUserName)
    {
      this.account_service.updateUserName(this.userName, this.oldPassword).subscribe
      (response =>{
        this.res = response
        if (response.token) {
          this.giveAlert("Username Changes Sucessfuly");
          localStorage.setItem('TOKEN', response.token);
         localStorage.setItem('username', this.userName);
         this.oldUserName = this.userName;
         this.ngOnInit();
        }
      },
      err=>{ 
        this.giveAlert("something went wrong make sure to entre the right password and try again");
        this.ngOnInit();
      })
    }
    
  }

  /**
   * function ChangePassword to update the new password
   */
  ChangePassword(){
    this.account_service.updatePassword(this.newPassword, this.oldPassword).subscribe(
      response =>{
        if (response.token) {
          this.newPassword = "";
        this.verifyNewPassword = "";
        localStorage.setItem('TOKEN', response.token);
        this.giveAlert("Password Changed Successfuly");
        this.ngOnInit();
        }
        
      },
      err=>{
        this.giveAlert("something went wrong make sure to entre the right password and try again");
      }
    )
  }

  giveAlert(message:string){
    const dialogRef = this.dialog.open(AlertComponentComponent, {
      
        height: '150px',
        width: '400px',
      
    });
  dialogRef.componentInstance.meesage = message;
  }
}
