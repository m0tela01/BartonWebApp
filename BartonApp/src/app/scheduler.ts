import { Component, OnInit } from "@angular/core";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "app-root",
  templateUrl: "./scheduler.html",
  styleUrls: ["./scheduler.css"]
})
export class Scheduler implements OnInit {
  title = "BartonApp";

  ngOnInit() {
   console.log('test');
  }
}
