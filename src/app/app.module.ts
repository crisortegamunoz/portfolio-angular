import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DialogModule } from '@angular/cdk/dialog';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorServiceInterceptor } from './core/interceptor/error-service.interceptor';
import { JwtInterceptor } from './core/interceptor/jwt.interceptor';

@NgModule({ declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        CommonModule,
        DialogModule], providers: [
        /*{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },*/
        { provide: HTTP_INTERCEPTORS, useClass: ErrorServiceInterceptor, multi: true },
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
