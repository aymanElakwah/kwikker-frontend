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
           
    }
    emailSent(form: NgForm) {
      const email = form.value;
      this.data.sendEmail(email)
        .subscribe(
         res => {
           console.log(res);
           this.router.navigate(['/login']);
         },
          err => console.log('error: ', err)
      );
    }
    

}
