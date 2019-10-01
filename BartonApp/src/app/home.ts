import { Component, OnInit } from "@angular/core";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { Router, RouterLink } from "@angular/router";

export interface previousSchedule {
  weekday;
  weekend;
}

@Component({
  selector: "app-root",
  templateUrl: "./home.html",
  styleUrls: ["./home.css"]
})
export class Home implements OnInit {
  title = "BartonApp";

  scheds: previousSchedule[];
  cols: any[];

  // constructor(public router: Router) {}

  ngOnInit() {
    this.getPreviousSchedules();
    this.intializeTable();
  }

  test(event: any) {
    console.log('are we there yet?')
  }

  // private onClickTest(event: any): void {
  //   console.log('teeesttt');
  //   this.router.navigate(['scheduler']);
  // }

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
