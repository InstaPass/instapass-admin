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
  indexArray: number[];
  valueContent: string;
  author: string;
  community_post_id: number;
  community_post: any;
  communities: any;
  community_post_unselected: boolean;

  constructor(private service: Service,  private apiService: ApiService) { 
      this.notifications = service.getNotifications();
      this.community_post_unselected = true;
  }

  click() {
    let annoPayload = {
      notification: {
        community_id: this.community_post_id,
        community: this.community_post.community,
        address: this.community_post.address,
        author: this.author,
        content: this.valueContent
      }
    }

    this.apiService.postNotification(annoPayload).subscribe(data => {
      if (data.status === "ok") {
        alert("发布成功！");
        this.getNotify();
      }else{
        alert("发布失败。\n错误原因：" + data.msg);
      }
    });
  }

  onSelectCommunityChanged() {
    console.log("aaa");
    let adminStatus = JSON.parse(window.localStorage.getItem('working_communities'));
    if (this.community_post_unselected == true) {
      
      this.community_post_unselected = false;
  
    }
    adminStatus.forEach(element => {
      if (element.community_id == this.community_post_id) {
        this.community_post = element;
        console.log(this.community_post);
      }
    });
  }

  getNotify(): void {
    this.notifications = [];
    let annos = [];
    this.apiService.getNotifications().subscribe(data => {
      console.log(data);
      if (data.status === "ok") {
        annos = data.notifications;
        annos.forEach(element => {
          debugger;
          let notification = new Notification();
          let date = new Date(element.release_time * 1000);
          let dateString = date.toLocaleDateString().replace(/\//g, "-") + " " + date.toTimeString().substr(0, 8);
          notification.key = dateString;
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

      this.indexArray = Array.from({length: this.notifications.length}, (v,k) => k);
      console.log(this.indexArray);
    });
  }

  ngOnInit(): void {
    this.getNotify();
    this.communities = JSON.parse(window.localStorage.getItem('working_communities'));
  }
}
