import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { isNull } from 'util';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private data: DataService , private router: Router) { }




  ngOnInit() {
   //check if this is a regestered user, navigate him to the home page
   //if not, show him the signup page
    if(!isNull(localStorage.getItem('TOKEN')))
      {
        this.router.navigate(['/home']);
      }
      else 
      this.router.navigate(['/']);
  }

}
