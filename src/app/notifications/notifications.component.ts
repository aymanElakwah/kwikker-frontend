import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(private titleServie:Title) {}

  ngOnInit() {
    if(this.titleServie){
    this.titleServie.setTitle("Kwikker /notifications")
  }
}

  

}
