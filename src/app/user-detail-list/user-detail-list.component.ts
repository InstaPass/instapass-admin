import { Component, OnInit } from '@angular/core';
import { Service, Employee, State } from './user-detail-data.service';

@Component({
  selector: 'app-user-detail-list',
  templateUrl: './user-detail-list.component.html',
  styleUrls: ['./user-detail-list.component.scss'],
  providers: [Service]
})
export class UserDetailListComponent implements OnInit {

  employees: Employee[];
  states: State[];

  constructor(service: Service) {
      this.employees =  service.getEmployees();
      this.states =  service.getStates();
  }

  ngOnInit(): void {
  }

}
