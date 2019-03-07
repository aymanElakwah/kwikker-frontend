import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// interceptor
import {HttpClientModule} from '@angular/common/http';
import {AddTokenInterceptor} from './services/add-token.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {CacheInterceptor } from './services/cache.interceptor';
import { CoreModule } from './core/core.module';
import { LogInComponent } from './log-in/log-in.component';
import { SearchModule } from './search/search.module';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SearchModule
  ],
  // to do move this services in needed modules
  providers: [{provide: HTTP_INTERCEPTORS , useClass: AddTokenInterceptor, multi: true },
              {provide: HTTP_INTERCEPTORS , useClass: CacheInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
