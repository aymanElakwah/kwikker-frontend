import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-confirm-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.css']
})
export class confirmPassword implements OnInit {
    public confirmCode: string;
    constructor(private data: DataService,private router: Router , private route: ActivatedRoute) {
    }
    ngOnInit() {
        this.confirmCode  = this.route.snapshot.paramMap.get("code");
       //save token at header
        localStorage.setItem('TOKEN', this.confirmCode);

    }
/**
 * sendPassword
 */
public sendPassword(form: NgForm) {
  var toSend = { 
    password: form.value.pass
 }; 
 
  this.data.sendPass(toSend)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/']);
      },
      err => console.log('error: ', err)
  );
  }

}
