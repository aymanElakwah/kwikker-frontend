import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotificationsModule } from './notifications/notifications.module';
import { NotificationsComponent } from './notifications/notifications.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'notifications', component: NotificationsComponent}
];

@NgModule({

  imports: [RouterModule.forRoot(routes),
    NotificationsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
