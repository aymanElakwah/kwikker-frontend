import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SharedModule } from '../shared/shared.module';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@NgModule({
  declarations: [SearchComponent,
  NavBarComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SearchModule { }
