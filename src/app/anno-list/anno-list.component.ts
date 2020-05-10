import { Component, OnInit } from '@angular/core';
import { Employee, Service } from './anno-data.service';

@Component({
  selector: 'app-anno-list',
  templateUrl: './anno-list.component.html',
  styleUrls: ['./anno-list.component.scss'],
  providers: [ Service ]
})
export class AnnoListComponent implements OnInit {

  employees: Employee[];

  constructor(service: Service) { 
      this.employees = service.getEmployees();
  }
  click(e) {}

  ngOnInit(): void {
  }

}
