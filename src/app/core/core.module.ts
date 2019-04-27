import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { DataService } from '../services/data.service';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers : [
    DataService
  ]
})
export class CoreModule { }
