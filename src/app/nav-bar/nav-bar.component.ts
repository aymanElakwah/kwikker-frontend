import { Component, OnInit, ɵConsole } from '@angular/core';
import { MatDialog, MatChipInputEvent } from '@angular/material';
import { NewKweekComponent } from '../new-kweek/new-kweek.component';
import { isNull } from 'util';
import { DataService } from '../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ChatComponent } from '../chat/chat.component';
import { User } from '../model/user';
import { NgxSpinnerService } from 'ngx-spinner';
/**
 * Navbar component.
 * Shows user a navigating bar on top.
 * Navigates to (Home, Notifications, Profile, Settings)
 * Log out user
 * Pop up (kweeks or Messages)
 */
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  /**
   * class NavBarComponent's variables.
   * string for user's username, taken from loaclstorage
   */
  public userName: string;
   /**
   * class NavBarComponent's variables.
   * a User variable, to sotre users that are returned from the search function.
   */
  users:User[];
  /**
   * class NavBarComponent's variables.
   * Two ways (ngModel) variable, that sends datat to data services function to check be searched.
   */
  filterBy:string;
  /**
   * class Navbar component's variables.
   * variable used as a pointer to the error navbar class, to show/hide them
   */
  public nav: any;
  /**
   * class Navbar component's variables.
   * Boolean to check for the last condition of the navbar ot show/hide it.
   */
  public toShow: boolean;
  /**
   * class Navbar component's variables.
   * A number used to store the last state of the screen width.
   */
  public screenWidth: number;
  
  /**
   * Navbar component's constructor
   * @param dialog for popup components
   * @param data for dataService's communications
   * @param router for navigating among pages
   * @param spinit to create the loading spinner
   * @returns void
   */
  constructor(private dialog: MatDialog,
              private data: DataService, 
              private router: Router, 
              private spinit: NgxSpinnerService
              ){}


/**
 * ngOnInit for navbar component
 * Creates the loading spinner for a second.
 * initialize some public data that used later
 * @param void
 * @returns void
 */
ngOnInit() {
  
        /** spinner starts on init */
        this.spinit.show();
        setTimeout(() => {
            /** spinner ends after 1 second */
            this.spinit.hide();
        }, 1000);
    
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
   * @param void
   * @returns void
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
   * @param void
   * @returns void
   */
    dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.nav.className = 'show';
    this.toShow = true;
  });
  }

   /**
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
   * toggleNav function
   * when the toggle button is clicked this function emmits
   * checks on the old status of the navbar (show/hide)
   * and toggle the state of it.
   * @param void
   * @returns void
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


/**
 * Checks on the current state of the navbar, decides whether to show it or hide it.
 * @param event The current event of the window
 * @returns void
 */
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
          
        this.nav.className = 'show';
        this.toShow = false;
        this.screenWidth = event.target.innerWidth;
        }
        else{
          //we was on a large screen, just re-store
          this.screenWidth = event.target.innerWidth;
        }
    }
   
  }

}

