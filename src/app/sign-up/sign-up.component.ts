import { Component, OnInit ,      Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { isNull } from 'util';
import { NgForm, Form } from '@angular/forms';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-sign-up' ,
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

public bar2: any;
public bar3: any;
public fs1: any;
public fs2: any;
public fs3: any;
public email: string;
public counter: number;
constructor(private data: DataService , private router: Router) { 
   
}


minDate = new Date(1900, 0, 1);
maxDate = new Date(2012, 0, 1);



ngOnInit() {
  //check if this is a regestered user, navigate him to the home page
  //if not, show him the signup page
  if(!isNull(localStorage.getItem('TOKEN')))
    {
      this.router.navigate(['/home']);
    }
    else 
    this.router.navigate(['signup']);

   this.bar2 =  document.querySelector('.secondProgress');
   this.bar3 =  document.querySelector('.thirdProgress');
   this.fs1=  document.querySelector('.fs1');
   this.fs2=  document.querySelector('.fs2');
   this.fs3 =  document.querySelector('.fs3');
   this.counter = 0;
}
/**
 * secondStep
 */
public secondStep(form: NgForm) {
  if( this.counter === 0){
    //for the first time
  this.email = form.value.email;
  //send
  this.counter = 1;
  }else{
    //now user is toggling between pages, if he entered the same email, I wont resend a new code
    //if he entered a new email, then I'll send him another code
    if (form.value.email != this.email){
      this.email = form.value.email;
      //send
    }
  }
  this.bar2.className = 'active';
  this.fs1.className = 'hide';
  this.fs2.className = 'show';  
 }
 public thirdStep() {
  this.bar3.className = 'active';
  this.fs2.className = 'hide';
  this.fs3.className = 'show';
 }
 public previousOne (){
   this.bar2.className = 'disabled';
   this.fs2.className = 'hide';
   this.fs1.className = 'show';  
 }
 public previousTwo (){
  this.bar3.className = 'disabled';
  this.fs3.className = 'hide';
  this.fs2.className = 'show';  
}

redesignDateFormat(date: string): string {
  console.log("this is it" , date)
  if (!date) {
    return null;
  }

  const dataArray = date.split('/');
  const month = Number(dataArray[0]) - 1;
  const day = Number(dataArray[1]);
  const year = Number(dataArray[2]);
  return (new Date(year, month, day)).toISOString();
}


}
