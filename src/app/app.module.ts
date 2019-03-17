import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SharedModule } from './shared/shared.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

// interceptor
import {HttpClientModule} from '@angular/common/http';
import {AddTokenInterceptor} from './services/add-token.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {CacheInterceptor } from './services/cache.interceptor';

import { CoreModule } from './core/core.module';
import { LogInComponent } from './log-in/log-in.component'; 
import { SearchModule } from './search/search.module';
import { HomeComponent } from './home/home.component';
import { SettingsModule } from './settings/settings.module';
import { InMemoryDataService } from '../app/services/in-memory-data-service.service';
import { ProfileModule } from './Profile/profile.module'
import { LogInModule } from './log-in/log-in.module';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    ProfileModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SearchModule,
    SettingsModule,
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false }
    ),
    LogInModule,
    FormsModule
  ],
  // to do move this services in needed modules
  providers: [{provide: HTTP_INTERCEPTORS , useClass: AddTokenInterceptor, multi: true },
              {provide: HTTP_INTERCEPTORS , useClass: CacheInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
