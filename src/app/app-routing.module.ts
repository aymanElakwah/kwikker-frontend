import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule,CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotificationsModule } from './notifications/notifications.module';
import { NotificationsComponent } from './notifications/notifications.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { KweekComponent } from './kweek/kweek.component';
import { ErrorPageComponent } from './ErrorPage/error-page/error-page.component';
import { confirmCode } from './sign-up/confirmCode.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { confirmPassword } from './reset-password/reset-password-confirm.component';
import { Observable } from 'rxjs';
import { WelcomeComponent } from './welcome/welcome.component';


 
@Injectable()
export class CanActivateTeam implements CanActivate {
  constructor(private router: Router){};
  
   canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    var realToken = localStorage.getItem('TOKEN');
    if(realToken === null)
     {
       window.alert("Unauthorized user, please log in first!");
       this.router.navigate(['']);
       return false;
      }
    else
    {
      console.log("Welcome");
      return true;
    }
  }
   
}
@Injectable()
export class CanDeactivateTeam implements CanActivate {
  constructor(private router: Router){};
  
   canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    var realToken = localStorage.getItem('TOKEN');
    if(realToken === null)
     {
        return true;
     }
    else
    {
      window.alert("You are already signed in");
      this.router.navigate(['']);
      return false;
     
    }
  }
   
}


const routes: Routes = [
  {path: '', component: WelcomeComponent },
  {path: 'home', component: HomeComponent,canActivate:[CanActivateTeam] },
  {path: 'signup', component: SignUpComponent, canActivate: [CanDeactivateTeam]},
 // {path: 'notifications', component: NotificationsComponent, canActivate: [CanActivateTeam]},
  {path: 'login', component: LogInComponent,canActivate: [CanDeactivateTeam] },
  {path: 'confirm/:code', component: confirmCode,canActivate: [CanDeactivateTeam]},
  {path: 'reset_password/:code', component: confirmPassword,canActivate: [CanDeactivateTeam]},
  {path: 'forget_password', component: ResetPasswordComponent,canActivate: [CanDeactivateTeam]},
  {path: 'kweeks', component: KweekComponent,canActivate: [CanActivateTeam]}, 
  {path: 'error', component: ErrorPageComponent}
 
];

@NgModule({

  imports: [RouterModule.forRoot(routes),
    NotificationsModule
  ],
  providers: [CanActivateTeam,CanDeactivateTeam],
  exports: [RouterModule]
})
export class AppRoutingModule { }

