import { Component, OnInit, NgZone } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TableModule } from 'primeng/table';

import { Employee } from '../../../core/models/employee'
import { HttpClient } from '@angular/common/http'

import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  cols: any[];
  employees: any[];

  constructor(public router: Router, private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getAllEmployees();
    this.intializeTable();
    console.log('employees has been loaded');
  }

  intializeTable() {
    this.cols = [
      { field: '', header: '' },
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Name' },
      { field: 'role', header: 'Role' },
      { field: 'shiftPreference', header: 'Shift Pref.' }
    ];
  }

/* what money mike has
  getAllEmployees() {
    this.httpService.get('https://localhost:44392/api/BartonData/GetEmployeeData').subscribe(
      data => {
          console.log(data);
          this.employees = data as Array<EmployeeObject>;
          console.log(this.employees[0].departmentName);
        });
  } */

  getAllEmployees() {
    this.employees = [
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' },
      { id: '1234', name: 'Joe Smoe', role: 'Filler', shiftPreference: '1' }
    ];
  }
}