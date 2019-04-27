import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NotificationslistComponent } from '../notificationslist/notificationslist.component';
import { ClapKweek } from '../notificationslist/clap-kweek.pipe';
import { NotificationsComponent } from './notifications.component';
import { MentionslistComponent } from '../mentionslist/mentionslist.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewKweekComponent } from '../new-kweek/new-kweek.component';
import { KweeksModule } from '../kweeks/kweeks.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CanActivateTeam } from '../app-routing.module';


@NgModule({
  declarations: [NotificationslistComponent,ClapKweek, NotificationsComponent, MentionslistComponent],
  imports: [
    CommonModule,
    SharedModule,
    KweeksModule,
    InfiniteScrollModule,
    NgbModule.forRoot(),
    RouterModule.forChild([
      {path: 'notifications', component: NotificationsComponent,canActivate:[CanActivateTeam],
    children: [
      {path: '', redirectTo: 'all', pathMatch: 'full'} ,
      {path: 'all', component: NotificationslistComponent },
      {path: 'mentions', component: MentionslistComponent}
    ]}
    ])
  ],
  exports:[
    NotificationsComponent
  ],
  entryComponents: [NewKweekComponent]
})
export class NotificationsModule { }
