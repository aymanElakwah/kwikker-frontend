import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AccountComponent } from '../account/account.component';
import { PasswordsComponent } from '../passwords/passwords.component';
import { MutedListComponent } from '../muted-list/muted-list.component';
import { BlockedListComponent } from '../blocked-list/blocked-list.component';
import { FormsModule } from '@angular/forms';
import { CanActivateTeam } from '../app-routing.module';
@NgModule({
  declarations: [SettingsComponent,
  AccountComponent,
  PasswordsComponent,
  MutedListComponent,
  BlockedListComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      // {path: 'settings', component: SettingsComponent ,canActivate: [CanActivateTeam],
      // children: [
      //   {path: '' , redirectTo: 'account' , pathMatch: 'full'},
      //   {path: 'account' , component: AccountComponent },
      //   {path: 'passwords', component: PasswordsComponent },
      //   {path: 'muted_following', component: MutedListComponent},
      //   {path: 'blocked_following', component: BlockedListComponent}
      // ]}
    ])
  ]
})
export class SettingsModule { }
