import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SharedModule } from './shared/shared.module';
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
//import { InMemoryDataService } from '../app/services/in-memory-data-service.service';
import { ChatModule } from './chat/chat.module';
import { ProfileModule } from './Profile/profile.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './ErrorPage/error-page/error-page.component';
import { MaterialModule } from './material.module';
import { confirmCode } from './sign-up/confirmCode.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { confirmPassword } from './reset-password/reset-password-confirm.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HomeComponent,
    SignUpComponent,
    ErrorPageComponent,
    confirmCode,
    ResetPasswordComponent,
    confirmPassword
    ],
  imports: [
    SharedModule,
    BrowserModule,
    ProfileModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    ChatModule,
    SearchModule,
    SettingsModule,
   /*  HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService,
    ), */
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
  ],
  // to do move this services in needed modules
  providers: [{provide: HTTP_INTERCEPTORS , useClass: AddTokenInterceptor, multi: true },
              /* {provide: HTTP_INTERCEPTORS , useClass: CacheInterceptor, multi: true } */
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
