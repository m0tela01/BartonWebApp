import { Component } from '@angular/core';
import { Router } from '@angular/router'

export enum menu {
  home = 1,
  scheduler = 2,
  employees = 3,
  settings = 4
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public router: Router) {}

  ngOnInit() {
  }

  menuChange(event: any) {
    console.log(event);
    switch(event) {
      case (menu.home): {
        this.router.navigate(['home']);
        break;     
      }
      case (menu.scheduler): {
        this.router.navigate(['scheduler']);
        break;     
      }
      case (menu.employees): {
        this.router.navigate(['employees']);
        break;
      }
      case (menu.settings): {
        this.router.navigate(['settings']);
        break;
      }
    }
  }

}