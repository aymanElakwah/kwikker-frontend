import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
/**
 * change username , password , muted people
 */
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent  {
/**
 * empty constructor
 */
  constructor(private titleService:Title) {
    if(this.titleService){
    this.titleService.setTitle("settings");
    }
   }


}
