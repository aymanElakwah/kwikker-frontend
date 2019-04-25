import { Component, OnInit, ɵConsole } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog, MatChipInputEvent } from '@angular/material';
import { NewKweekComponent } from '../new-kweek/new-kweek.component';
import { isNull } from 'util';
import { InboxComponent } from '../inbox/inbox.component';
import { NgForm,  FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TitleService } from '../services/title.service';
import { MiniUser } from '../model/mini-user';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { ChatComponent } from '../chat/chat.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public userName: string;
  users:MiniUser[];
  filterBy:string;
  public nav: any;
  public toShow: boolean;

  constructor(private dialog: MatDialog,
              private data: DataService, 
              private router: Router
             )

              {

              }

  ngOnInit() {
    this.userName =  localStorage.getItem('username');
    console.log(this.userName);
    if (isNull(this.userName))
    {
      
      this.userName = "username"; 
    }
    this.nav =  document.querySelector('.myNavBar');
    this.toShow = false;
   
    
  }

  /**
   * Function to open kweek dialog 
   * paneClass -> attach the dialog to specific css class
   */

  openKweekComponent(){
    console.log("working")
    const dialogRef = this.dialog.open(NewKweekComponent, {
      panelClass: 'kweekBox'
    });
  
  /**
   * Function for closing the dialog and displaying a msg 
   * 
   */

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

    console.log("modal should show");
  }
   /**
   * Function to open kweek dialog 
   * paneClass -> attach the dialog to specific css class
   */

  openInboxComponent(){
    console.log("working")
    const dialogRef = this.dialog.open(ChatComponent,  { panelClass: 'custom-dialog-container' });
  
  /**
   * Function for closing the dialog and displaying a msg 
   * 
   */

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

    console.log("modal should show");
  }
   /**
   *
   *Log out function, removes the Token and username saved in localStorage
   * @param form {NgForm} the Form parameter, which has all the 'log-out' form information
   * @returns void
   * it navigates to the main page 'welcome page'.
   */
  logOutUser() {
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("username");
    this.router.navigate(["/"]);
    //For testing purposes
    // localStorage.setItem("TOKEN","123");
    // localStorage.setItem("username","ev");
    // this.router.navigate(["home"]);
  }
  /**
   * after each char send new request or navigate
   */
  newSearch(event) {
    if(event.key === "Enter") {
      // navigate to search
      this.router.navigate(['/search',this.filterBy]);
    }
    this.data.searchUsers(this.filterBy).subscribe(
      list => { this.users = list; }

    );
  }
  /**
   * toggleNav
   */
  public toggleNav() {
    if (this.toShow == true)
    {
       this.nav.className = 'hide';
       this.toShow = false;
       return;
    }
    else {
       this.nav.className = 'show';
       this.toShow = true;
      return;
    }
  }
}

