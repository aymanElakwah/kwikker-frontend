import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-confirm-password',
    templateUrl: './confirm-password.component.html',
    styleUrls: ['./reset-password.component.css']
})
export class confirmPassword implements OnInit {
    public confirmCode: string;
    constructor(private data: DataService,private router: Router , private route: ActivatedRoute) {
    }
    ngOnInit() {
        this.confirmCode  = this.route.snapshot.paramMap.get("code");
        //send to the service
        //redirect to home as if he was logged in, save token and email
        this.data.signUpConfirm(this.confirmCode,1)
        .subscribe(
         res => {
           console.log(res);
           localStorage.setItem('TOKEN', res.token);
           this.router.navigate(['/home']);
         },
          err => console.log('error: ', err)
      );

      
    }


}
