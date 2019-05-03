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
import { User } from '../model/user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public userName: string;
  users:User[];
  filterBy:string;
  public nav: any;
  public toShow: boolean;
  public screenWidth: number;
  constructor(private dialog: MatDialog,
              private data: DataService, 
              private router: Router
             ){}

  ngOnInit() {
    this.userName =  localStorage.getItem('username');
    if (isNull(this.userName))
    {
      
      this.userName = "username"; 
    }
    this.nav =  document.querySelector('.myNavBar');
    this.toShow = true;
   this.screenWidth = 1000;
    
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
  dialogRef.componentInstance.reply = false;
  dialogRef.componentInstance.kweekTO = false;
  /**
   * Function for closing the dialog and displaying a msg 
   * 
   */

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.nav.className = 'show';
      this.toShow = true;
    });

   
  }
   /**
   * Function to open kweek dialog 
   * paneClass -> attach the dialog to specific css class
   */

  openInboxComponent(){
    const dialogRef = this.dialog.open(ChatComponent,  { panelClass: 'custom-dialog-container' });
  
  /**
   * Function for closing the dialog and displaying a msg 
   * 
   */
    dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.nav.className = 'show';
    this.toShow = true;
  });

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
    this.router.navigate([""]);
  }
  /**
   * after each char send new request or navigate
   */
  newSearch(event) {
    if(event.key === "Enter") {
      this.router.navigate(['/search'] , { queryParams: { filterBy: this.filterBy } });
    }
    this.data.searchUsers(this.filterBy).subscribe(
      list => { this.users = list; 
        this.users = this.users.slice(0,5);
      }


    );
  }
  /**
   * toggleNav
   */
  public toggleNav() {
   // screen.width
    if (this.toShow == false)
    {

       this.nav.className = 'hide';
       this.toShow = true;
       return;
    }
    else {
       this.nav.className = 'show';
       this.toShow = false;
      return;
    }
  }
  onResize(event){
    if(event.target.innerWidth <=765 )
    {
      if(this.screenWidth > 765)
      {
       this.nav.className = 'hide';
       this.toShow = true;
      }
      if(this.screenWidth <= 765)
      {
       this.nav.className = 'hide';
       this.toShow = true;
      }
      
     this.screenWidth = event.target.innerWidth;
    }else{
        //larger deveice, check the latest value
        console.log("large device", event.target.innerWidth );
        if(this.screenWidth <= 765)
        {
          //act
          if(this.toShow == true)
            {
              this.nav.className = 'show';
              this.toShow = false;
            }
            this.screenWidth = event.target.innerWidth;
        }
        else{
          //we was on a large screen, just re-store
          this.screenWidth = event.target.innerWidth;
        }
    }
   
  }
}

