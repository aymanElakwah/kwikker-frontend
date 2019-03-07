import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { SearchComponent } from './search.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { KweekComponent } from '../kweek/kweek.component';
import { ProfilesListComponent } from '../profiles-list/profiles-list.component';
@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: 'search', component: SearchComponent,
    children: [
      {path: '', redirectTo: 'kweeks', pathMatch: 'full'} ,
      {path: 'kweeks', component: KweekComponent },
      {path: 'people', component: ProfilesListComponent}
    ]}
    ])
  ]
})
export class SearchModule { }
