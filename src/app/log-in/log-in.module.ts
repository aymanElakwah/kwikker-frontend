import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {LogInComponent} from './log-in.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
    RouterModule.forChild([
    {path: 'login', component: LogInComponent},
    
  ]),
    
  ]
})
export class LogInModule { }
