import { Component, OnInit } from '@angular/core';
import {  NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {MatDialogRef} from '@angular/material';

import { delay } from 'rxjs/operators';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-alert-component',
  templateUrl: './alert-component.component.html',
  styleUrls: ['./alert-component.component.css']
})
export class AlertComponentComponent implements OnInit {
  meesage:string;


  constructor(public thisDialogRef: MatDialogRef<AlertComponentComponent>) { }

  ngOnInit() {
  }

}
