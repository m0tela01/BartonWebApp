import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import {MessageService} from 'primeng/api';

export interface scheduleCreate {
  job: string;
  s1: number;
  s2: number;
  s3: number;
}

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css'],
  providers: [MessageService]
})
export class SchedulerComponent implements OnInit {
  scheds: scheduleCreate[];
  cols: any[];

  
  clonedScheds: { [s: string]: scheduleCreate; } = {};

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.getPreviousSchedules();
    this.intializeTable();

    console.log('scheduler has been loaded');
  }

  intializeTable() {
    this.cols = [
      { field: 'job', header: 'Job' },
      { field: 's1', header: 'Shift 1' },
      { field: 's2', header: 'Shift 2' },
      { field: 's3', header: 'Shift 3' }
    ];
  }

  getPreviousSchedules() {
    this.scheds = [
      { job: 'Filler', s1: 8, s2: 7, s3: 6 },
      { job: 'Case Feeder', s1: 9, s2: 7, s3: 7 },
      { job: 'Testy Test', s1: 6, s2: 1, s3: 9 },
      { job: 'Money Mikes', s1: 8, s2: 4, s3: 8 }
    ];
  }

  onRowEditInit(car: scheduleCreate) {
    this.clonedScheds[car.job] = {...car};
}

onRowEditSave(car: scheduleCreate) {
        delete this.clonedScheds[car.job];
        this.messageService.add({severity:'success', summary: 'Success', detail:'Car is updated'});
}

onRowEditCancel(car: scheduleCreate, index: number) {
    this.scheds[index] = this.clonedScheds[car.job];
    delete this.clonedScheds[car.job];
}
}
