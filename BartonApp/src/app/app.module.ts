import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

import {AppComponent} from './app.component'
import { AppRoutingModule } from './app-routing.module';
import { Home } from './home';
import { Scheduler } from './scheduler';

@NgModule({
  declarations: [
    AppComponent,
    Home,
    Scheduler
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ButtonModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
