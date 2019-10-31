import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'

//PrimeNG Imports
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module';

import { SchedulerComponent } from './modules/scheduler/scheduler.component';
import { MenuComponent } from './core/menu/menu.component';

//App Module Imports
import { HomeModule } from './modules/home/home.module'
import { EmployeesModule } from './modules/employees/employees.module';
import { HistoryModule } from './modules/history/history.module'

@NgModule({
  imports: [
    EmployeesModule,
    HomeModule,
    HistoryModule,

    AppRoutingModule,

    BrowserModule,
    ButtonModule,
    TableModule,

    FormsModule
  ],
  declarations: [
    AppComponent,
    SchedulerComponent,
    MenuComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
