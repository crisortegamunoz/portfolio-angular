import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DialogModule } from '@angular/cdk/dialog';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorServiceInterceptor } from './core/interceptor/error-service.interceptor';
import { JwtInterceptor } from './core/interceptor/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    DialogModule,
    HttpClientModule
  ],
  providers: [
    /*{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },*/
    { provide: HTTP_INTERCEPTORS, useClass: ErrorServiceInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
