import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ProfilesListComponent } from '../profiles-list/profiles-list.component';
import { KweekComponent } from '../kweek/kweek.component';

@NgModule({
  declarations: [NavBarComponent,
  ProfilesListComponent,
  KweekComponent],
  imports: [
    CommonModule
  ],
  exports: [NavBarComponent,
  ProfilesListComponent,
  KweekComponent]
})
export class SharedModule { }
