import { Component, OnInit } from "@angular/core";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { Router, RouterLink } from "@angular/router";

export interface previousSchedule {
  weekday;
  weekend;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "BartonApp";

  scheds: previousSchedule[];
  cols: any[];

  constructor(public router: Router) {}

  ngOnInit() {
    this.getPreviousSchedules();
    this.intializeTable();
  }

  intializeTable() {
    this.cols = [
      { field: "weekday", header: "Weekday" },
      { field: "weekend", header: "Weekend" }
    ];
  }

  getPreviousSchedules() {
    this.scheds = [
      {weekday: "kdaja", weekend: "2018"},
      {weekday: "dahjd", weekend: "2018"},
      {weekday: "dfewq", weekend: "2018"}
    ];
  }
}
