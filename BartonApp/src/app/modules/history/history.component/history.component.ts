import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  testObserv$: Observable<any>;
  test: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.testObserv$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => (this.test = params.get('id')))
    );
    console.log('history has been loaded');

    this.testTheStart();
  }

  onTestClick() {
    console.log(this.test);
  }

  onTestyTest() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => (this.test = params.get('id')))
    );
  }

  schedules: any[];

  rowGroupMetadata: any;

  testTheStart() {
    this.schedules = [
      {job: 'test1', employeeName: "name"},
      {job: 'test1', employeeName: "name"},
      {job: 'test1', employeeName: "name"},
      {job: 'test1', employeeName: "name"},
      {job: 'test1', employeeName: "name"},
      {job: 'test2', employeeName: "name"},
      {job: 'test2', employeeName: "name"},
      {job: 'test2', employeeName: "name"},
      {job: 'test2', employeeName: "name"},
      {job: 'test2', employeeName: "name"}
    ]

    this.updateRowGroupMetaData();
  }

  onSort() {
    this.updateRowGroupMetaData();
  }

  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};

    //verify object is filled
    if (this.schedules) {
      for (let i = 0; i < this.schedules.length; i++) {
        let rowData = this.schedules[i];

        //start indexing by job for row group
        let job = rowData.job;
        if (i == 0) {
          this.rowGroupMetadata[job] = { index: 0, size: 1 };
        } else {
          let previousRowData = this.schedules[i - 1];
          let previousRowGroup = previousRowData.job;
          if (job === previousRowGroup) this.rowGroupMetadata[job].size++;
          else this.rowGroupMetadata[job] = { index: i, size: 1 };
        }
      }
    }
  }

  //needs work still
  exportExcel() {
    import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.schedules);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "primengTable");
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then(FileSaver => {
        let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        let EXCEL_EXTENSION = '.xlsx';
        const data: Blob = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    });
  }
}
