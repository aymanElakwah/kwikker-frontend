import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-confirm-signUp',
    templateUrl: './confirm-signUp.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class confirmCode implements OnInit {
    public confirmCode: string;
    constructor(private data: DataService,private router: Router , private route: ActivatedRoute) {
    }
    ngOnInit() {
        this.confirmCode  = this.route.snapshot.paramMap.get("code");
        //send to the service
        //redirect to home as if he was logged in, save token and email
        var toSend = { 
          confirmation_code:this.confirmCode
       };
        this.data.signUpConfirm(toSend)
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
