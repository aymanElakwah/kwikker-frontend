import { Component, OnInit } from '@angular/core';
import { NewKweekComponent } from '../new-kweek/new-kweek.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog, TooltipPosition } from '@angular/material';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(private modalService: NgbModal,private dialog: MatDialog) {}

  ngOnInit() {
  }

  openKweekComponent(){
    console.log("working")
    const dialogRef = this.dialog.open(NewKweekComponent, {
      panelClass: 'kweekBox'
    });
  

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

    console.log("modal should show");
  }

}
