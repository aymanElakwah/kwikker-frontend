import { Component, OnInit } from '@angular/core';
import { isNull } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router) { 

    if(!isNull( localStorage.getItem("TOKEN")))
    {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {

  }

}
