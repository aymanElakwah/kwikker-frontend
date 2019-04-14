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
    public confirmCode: any;
    constructor(private data: DataService,private router: Router , private route: ActivatedRoute) {
    }
    ngOnInit() {
        this.confirmCode  = this.route.snapshot.paramMap.get("code");
        localStorage.setItem('TOKEN', this.confirmCode);

    }
/**
   *This function is called when updating the password.
   * It takes the submitForm values and wrap the password in an object.
   * Then send it to sendPass() function, that pushes it to the backend server.
   * @param form {NgForm} 
   * stores new token if success mission, otherwise returns an error
   * @returns void
   */
public sendPassword(form: NgForm) {
  var toSend = { 
    password: form.value.pass
 }; 
 
  this.data.sendPass(toSend)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('TOKEN', res.token);
        this.router.navigate(['/']);
      },
      err => console.log('error: ', err)
  );
  }

}
