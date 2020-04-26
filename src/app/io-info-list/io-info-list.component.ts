import { Component, OnInit } from '@angular/core';
import { Message, Service } from './io-info-data.service';

@Component({
  selector: 'app-io-info-list',
  templateUrl: './io-info-list.component.html',
  styleUrls: ['./io-info-list.component.scss'],
  providers: [Service]
})
export class IoInfoListComponent implements OnInit {
  messages: Message[];

  constructor(service: Service) {
    this.messages = service.getMessages();
  }

  ngOnInit(): void {
    console.log("ioInfo-list gen");
  }

}
