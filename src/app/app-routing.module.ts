import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotificationsModule } from './notifications/notifications.module';
import { NotificationsComponent } from './notifications/notifications.component';




<<<<<<< HEAD


const ROUTES: Routes = [
  {path: 'home', component: HomeComponent}
||||||| merged common ancestors
const routes: Routes = [
  {path: 'home', component: HomeComponent}
=======
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'notifications', component: NotificationsComponent}
>>>>>>> jimmy
];

@NgModule({
<<<<<<< HEAD
  imports: [RouterModule.forRoot(ROUTES)],
||||||| merged common ancestors
  imports: [RouterModule.forRoot(routes)],
=======
  imports: [RouterModule.forRoot(routes),
    NotificationsModule
  ],
>>>>>>> jimmy
  exports: [RouterModule]
})
export class AppRoutingModule { }
