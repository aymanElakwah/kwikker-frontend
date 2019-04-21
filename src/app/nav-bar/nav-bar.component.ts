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

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public userName: string;
  users:MiniUser[];
 filterBy:string;



  constructor(private dialog: MatDialog,
              private data: DataService, 
              private router: Router
             )

              {

              }

  ngOnInit() {
    this.userName =  localStorage.getItem('username');
    if (isNull(this.userName))
    {
      this.userName = "user"; 
    }
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
    const dialogRef = this.dialog.open(InboxComponent, {
      height: '600px',
      width: '1000px',
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
   *
   *Log out function, removes the Token and username saved in localStorage
   * @param form {NgForm} the Form parameter, which has all the 'log-out' form information
   * @returns void
   * it navigates to the main page 'welcome page'.
   */
  logOutUser(form: NgForm) {
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("username");
    this.router.navigate(["/"]);
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
  
}

