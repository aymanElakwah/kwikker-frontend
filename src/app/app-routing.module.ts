import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'signup', component: SignUpComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'login', component: LogInComponent},
  {path: 'confirm/:code', component: confirmCode},
  {path: 'reset_password/:code', component: confirmPassword},
  {path: 'forget_password', component: ResetPasswordComponent},
  
  {path: 'kweeks', component: KweekComponent},
  {path: '', component: HomeComponent},
  {path:'notifications', component: NotificationsComponent},
  {path: 'login', component: LogInComponent},
  {path: 'error', component: ErrorPageComponent}
 
];

@NgModule({

  imports: [RouterModule.forRoot(routes),
    NotificationsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
