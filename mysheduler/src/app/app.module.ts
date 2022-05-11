import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { HeaderComponent } from './header/header.component';
import { SiginComponent } from './auth/sigin/sigin.component';
import { SigupComponent } from './auth/sigup/sigup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DaoService } from './services/dao.service';
import { RequetesService } from './services/requetes.service';
import { RoutesService } from './services/routes.service';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { ChoiceComponent } from './choice/choice.component';
import { ArraysService } from './services/arrays.service';
import { ShedulerService } from './services/sheduler.service';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    HeaderComponent,
    SiginComponent,
    SigupComponent,
    DashboardComponent,
    ChoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    DaoService,
    RequetesService,
    RoutesService,
    AuthService,
    ArraysService,
    ShedulerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
