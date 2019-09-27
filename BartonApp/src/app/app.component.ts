import { Component, OnInit } from "@angular/core";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";

export interface previousSchedule {
  weekday;
  weekend;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "BartonApp";

  scheds: previousSchedule[];
  cols: any[];
  

  ngOnInit() {
    this.scheds = [
      {weekday: "kdaja", weekend: "2018"},
      {weekday: "dahjd", weekend: "2018"},
      {weekday: "dfewq", weekend: "2018"}
    ]

    this.cols = [
      { field: "weekday", header: "Weekday" },
      { field: "weekend", header: "Weekend" }
    ];
  }
}
