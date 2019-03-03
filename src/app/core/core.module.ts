import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { LoggerService } from '../services/logger.service';

@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    NavBarComponent
  ],
  providers : [LoggerService]
})
export class CoreModule { }
