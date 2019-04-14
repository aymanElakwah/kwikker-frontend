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


@NgModule({
  declarations: [NotificationslistComponent,ClapKweek, NotificationsComponent, MentionslistComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule.forRoot(),
    RouterModule.forChild([
      {path: 'notifications', component: NotificationsComponent,
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
