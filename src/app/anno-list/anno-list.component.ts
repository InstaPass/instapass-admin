import { Component, OnInit } from '@angular/core';
import { Notification, Service } from './anno-data.service';

import { ApiService } from '../service/api.service';
import { not } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-anno-list',
  templateUrl: './anno-list.component.html',
  styleUrls: ['./anno-list.component.scss'],
  providers: [ Service ]
})
export class AnnoListComponent implements OnInit {

  notifications: Notification[];
  valueContent: string;

  constructor(private service: Service,  private apiService: ApiService) { 
      this.notifications = service.getNotifications();
  }

  valueChange(value) {
    this.valueContent = value;
    console.log(this.valueContent);
  }

  click(e) {
    let adminStatus = JSON.parse(window.localStorage.getItem('working_communities'));
    let annoPayload = {
      notification: {
        community_id: adminStatus[0].community_id,
        community: adminStatus[0].community,
        address: adminStatus[0].address,
        author: "登录信息里没有这一项",
        content: this.valueContent
      }
    }
    console.log(adminStatus);
    console.log(annoPayload);

    this.apiService.postNotification(annoPayload).subscribe(data => {
      if (data.status === "ok") {
        alert("发布成功！");
        this.getNotify();
      }else{
        alert("发布失败。\n错误原因：" + data.msg);
      }
    });
  }

  getNotify(): void {
    let annos = [];
    this.apiService.getNotifications().subscribe(data => {
      if (data.status === "ok") {
        annos = data.notifications;
        annos.forEach(element => {
          debugger;
          let notification = new Notification();
          let dateString = new Date(element.release_time).toUTCString();
          notification.key = dateString + ' ' + element.release_time.toString();
          notification.items = [];
          notification.items.push(element.author);
          notification.items.push(element.address);
          notification.items.push(element.community);
          notification.items.push(element.content);
          this.notifications.push(notification);
        });
      }else{
        alert("拉取公告失败。\n错误原因：" + data.msg);
      }
    });
  }

  ngOnInit(): void {
    this.getNotify();
  }
}
