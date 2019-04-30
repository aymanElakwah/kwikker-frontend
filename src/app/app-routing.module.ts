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
import { SettingsComponent } from './settings/settings.component';
import { AccountComponent } from './account/account.component';
import { PasswordsComponent } from './passwords/passwords.component';
import { MutedListComponent } from './muted-list/muted-list.component';
import { BlockedListComponent } from './blocked-list/blocked-list.component';
import { NotificationslistComponent } from './notificationslist/notificationslist.component';
import { MentionslistComponent } from './mentionslist/mentionslist.component';
import { SearchComponent } from './search/search.component';
import { MiniProfileComponent } from './Profile/mini-profile/mini-profile.component';



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
      this.router.navigate(['home']);
      return false;
     
    }
  }
   
}


const routes: Routes = [
  {path: '', component: WelcomeComponent },
  {path: 'home', component: HomeComponent,canActivate:[CanActivateTeam] },
  {path: 'signup', component: SignUpComponent, canActivate: [CanDeactivateTeam]},
  {path: 'login', component: LogInComponent,canActivate: [CanDeactivateTeam] },
  {path: 'confirm/:code', component: confirmCode,canActivate: [CanDeactivateTeam]},
  {path: 'reset_password/:code', component: confirmPassword,canActivate: [CanDeactivateTeam]},
  {path: 'forget_password', component: ResetPasswordComponent,canActivate: [CanDeactivateTeam]},
  {path: 'kweeks', component: KweekComponent,canActivate: [CanActivateTeam]}, 
  {path: 'error', component: ErrorPageComponent},
  {path: 'settings', component: SettingsComponent ,canActivate: [CanActivateTeam],
      children: [
        {path: '' , redirectTo: 'account' , pathMatch: 'full'},
        {path: 'account' , component: AccountComponent },
        {path: 'passwords', component: PasswordsComponent },
        {path: 'muted_following', component: MutedListComponent},
        {path: 'blocked_following', component: BlockedListComponent}
      ]},
  {path: 'notifications', component: NotificationsComponent,canActivate:[CanActivateTeam],
  children: [
    {path: '', redirectTo: 'all', pathMatch: 'full'} ,
    {path: 'all', component: NotificationslistComponent },
    {path: 'mentions', component: MentionslistComponent}
  ]},
  {path: '**', component: ErrorPageComponent},
  
];

@NgModule({

  imports: [RouterModule.forRoot(routes) ],
  providers: [CanActivateTeam,CanDeactivateTeam],
  exports: [RouterModule]
})
export class AppRoutingModule { }

