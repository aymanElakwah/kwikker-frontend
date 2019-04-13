import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-reset-password',
  templateUrl: './enter-email.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  public confirmCode: string;
    constructor(private data: DataService,private router: Router , private route: ActivatedRoute) {
    }
    ngOnInit() {
      //   this.confirmCode  = this.route.snapshot.paramMap.get("code");
      //   //send to the service
      //   //redirect to home as if he was logged in, save token and email
      //   this.data.signUpConfirm(this.confirmCode,0)
      //   .subscribe(
      //    res => {
      //      console.log(res);
      //      localStorage.setItem('TOKEN', res.token);
      //      this.router.navigate(['/home']);
      //    },
      //     err => console.log('error: ', err)
      // );

      
    }
    sendEmail(form: NgForm) {
      const email = form.value;
     // var ev: (err: any) => void;
      this.data.logInUser(email)
        .subscribe(
         res => {
           console.log(res);
           this.router.navigate(['/home']);
         },
          err => console.log('error: ', err)
      );
    }
    

}
