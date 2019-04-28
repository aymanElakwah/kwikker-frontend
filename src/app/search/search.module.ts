import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { SearchComponent } from './search.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { KweekComponent } from '../kweek/kweek.component';
import { MiniProfileComponent } from '../Profile/mini-profile/mini-profile.component';
import { CanActivateTeam } from '../app-routing.module';
@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: 'search', component: SearchComponent,canActivate:[CanActivateTeam],
    children: [
      {path: '', redirectTo: 'kweeks', pathMatch: 'full'} ,
      {path: 'kweeks', component: KweekComponent },
      {path: 'people', component: MiniProfileComponent}
    ]}
    ])
  ]
})
export class SearchModule { }
