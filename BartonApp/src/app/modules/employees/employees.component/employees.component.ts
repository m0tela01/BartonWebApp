import { Component, OnInit, Inject, NgZone } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { MessageService } from 'primeng/api';

import { EmployeeObject } from '../../../core/models/EmployeeObject';
import { EmployeeService } from '../../../core/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [MessageService]
})

export class EmployeesComponent implements OnInit {
  cols: any[];
  employees: Array<EmployeeObject>;
  clonedEmployees: { [s: string]: EmployeeObject; } = {};

  //for new employee dialog
  newEmployee: EmployeeObject = new EmployeeObject();
  displayDialog: boolean = false;

  constructor(public router: Router, private employeeService: EmployeeService, private messageService: MessageService) { }

  ngOnInit() {
    this.getAllEmployees();
    console.log('employees has been loaded');
  }

  getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe(
      res => {
        if (res) {
          this.employees = res as Array<EmployeeObject>;
          console.log(this.employees[0].departmentName);    //debugging - sanity check: remove
        } else {
          //TODO: add toast for no info found
          console.log('where that data at doe?');
        }

      });
  }

  //TODO: How can I update seniorityNumber?
  onRowEditInit(employee: EmployeeObject) {
    this.clonedEmployees[employee.seniorityNumber] = { ...employee };
  }

  //TODO: 1. Create dialog "Are you sure you want to update" 2. Post a save to db
  onRowEditSave(employee: EmployeeObject) {
    delete this.clonedEmployees[employee.seniorityNumber];
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Employee is updated' });
  }

  onRowEditCancel(employee: EmployeeObject, index: number) {
    this.employees[index] = this.clonedEmployees[employee.seniorityNumber];
    delete this.clonedEmployees[employee.seniorityNumber];
  }

  //TODO: Create post for new employee
  onAddNewEmployee() {
    this.newEmployee = new EmployeeObject();
    this.displayDialog = true;
  }

  save() {
    if (this.newEmployee && this.employeeObjectCheck()) {
      //TODO: Create post to add new employee
      //this.employeeService.addNewEmployee(this.newEmployee)
      this.newEmployee = null;
      this.displayDialog = false;
    } else {
      this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Please fill out the the dialog' })
    }
  }

  //TODO: verify all fields are there (MAY NOT BE NEEDED)
  employeeObjectCheck() {
    return true;
  }

  exitDialog() {
    this.newEmployee = null;
    this.displayDialog = false;
  }
}

