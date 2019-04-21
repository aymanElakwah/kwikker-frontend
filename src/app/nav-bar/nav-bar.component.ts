import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material';
import { NewKweekComponent } from '../new-kweek/new-kweek.component';
import { isNull } from 'util';
import { InboxComponent } from '../inbox/inbox.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public userName: string;
  constructor(private modalService: NgbModal,private dialog: MatDialog) {}

  ngOnInit() {
    this.userName =  localStorage.getItem('username');
    if (isNull(this.userName))
    {
      this.userName = 'user'; 
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
  
}
