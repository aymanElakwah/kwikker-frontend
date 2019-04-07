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
constructor(private data: DataService , private router: Router) { 
   
}



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
  
}
/**
 * secondStep
 */
public secondStep() {
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
//  public secondStepAgain() {
//   var bar1 =  document.querySelector('.secondProgress');
//   bar1.className = 'active';
//   var element =  document.querySelector('.fs1');
//   element.className = 'hide';
//   var element2 =  document.querySelector('.fs2');
//   element2.className = 'show';  
//  }


















// Next1(form:NgForm){
//  const user = form.value;
//  if (isNull(user.email) ||isNull(user.pass)||isNull(user.cpass)  )
//  return;
 
// console.log (form.value.email);
//   if(this.animating) return false;
//   this.animating  = true;
  
  
//  // this.current_fs = parent();
// }
}
//jQuery time
//var current_fs, next_fs, previous_fs; //fieldsets
//var left, opacity, scale; //fieldset properties which we will animate
//var animating; //flag to prevent quick multi-click glitches

  // $(".next").click(function(){
  //   if(animating) return false;
  //   animating = true;
    
  //   current_fs = $(this).parent();
  //   next_fs = $(this).parent().next();
    
  //   //activate next step on progressbar using the index of next_fs
  //   $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
    
  //   //show the next fieldset
  //   next_fs.show(); 
  //   //hide the current fieldset with style
  //   current_fs.animate({opacity: 0}, {
  //     step: function(now, mx) {
  //       //as the opacity of current_fs reduces to 0 - stored in "now"
  //       //1. scale current_fs down to 80%
  //       scale = 1 - (1 - now) * 0.2;
  //       //2. bring next_fs from the right(50%)
  //       left = (now * 50)+"%";
  //       //3. increase opacity of next_fs to 1 as it moves in
  //       opacity = 1 - now;
  //       current_fs.css({
  //         'transform': 'scale('+scale+')',
  //         'position': 'absolute'
  //       });
  //       next_fs.css({'left': left, 'opacity': opacity});
  //     }, 
  //     duration: 800, 
  //     complete: function(){
  //       current_fs.hide();
  //       animating = false;
  //     }, 
  //     //this comes from the custom easing plugin
  //     easing: 'easeInOutBack'
  //   });
  // });

  // $(".previous").click(function(){
  //   if(animating) return false;
  //   animating = true;
    
  //   current_fs = $(this).parent();
  //   previous_fs = $(this).parent().prev();
    
  //   //de-activate current step on progressbar
  //   $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
    
  //   //show the previous fieldset
  //   previous_fs.show(); 
  //   //hide the current fieldset with style
  //   current_fs.animate({opacity: 0}, {
  //     step: function(now, mx) {
  //       //as the opacity of current_fs reduces to 0 - stored in "now"
  //       //1. scale previous_fs from 80% to 100%
  //       scale = 0.8 + (1 - now) * 0.2;
  //       //2. take current_fs to the right(50%) - from 0%
  //       left = ((1-now) * 50)+"%";
  //       //3. increase opacity of previous_fs to 1 as it moves in
  //       opacity = 1 - now;
  //       current_fs.css({'left': left});
  //       previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
  //     }, 
  //     duration: 800, 
  //     complete: function(){
  //       current_fs.hide();
  //       animating = false;
  //     }, 
  //     //this comes from the custom easing plugin
  //     easing: 'easeInOutBack'
  //   });
  // });

  // $(".submit").click(function(){
  //   return false;
  // })

