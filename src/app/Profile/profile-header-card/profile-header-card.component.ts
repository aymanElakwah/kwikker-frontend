import { Component, Input , OnInit } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'app-profile-header-card',
  templateUrl: './profile-header-card.component.html',
  styleUrls: ['./profile-header-card.component.css']
})
export class ProfileHeaderCardComponent implements OnInit {
 
  @Input() profileHeaderInfo:User;

  constructor() { }

  ngOnInit() {
  }

}
