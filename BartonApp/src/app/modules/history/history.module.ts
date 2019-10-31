import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history.component/history.component'

import { TableModule } from 'primeng/table';

@NgModule({
  imports: [
    CommonModule,
    HistoryRoutingModule,
    TableModule
  ],
  declarations: [
    HistoryComponent
  ]
})
export class HistoryModule { }
